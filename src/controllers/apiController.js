import Like from "../Model/Like";
import Upload from "../Model/Upload";
import Comment from "../Model/Comment";
import regeneratorRuntime, { async } from "regenerator-runtime";
import User from "../Model/User";

export const like = async (req, res) => {
  const { _id } = req.session.user;
  const { id } = req.params;
  const post = await Upload.findById(id).populate("owner");
  const user = await User.findById(_id);
  if (!post) {
    return res.sendStatus(402);
  }
  const userExitst = await Like.exists({
    $and: [{ owner: _id }, { upload: id }],
  });
  if (userExitst) {
    return res.sendStatus(404);
  }
  if (_id === String(post.owner)) {
    return res.sendStatus(403);
  }
  await Like.create({
    owner: _id,
    upload: id,
  });
  post.uploadLike.push(_id);
  post.owner.loveMe.push(_id);
  post.save();
  user.likeUser.push(id);
  user.save();
  return res.sendStatus(200);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { _id } = req.session.user;
  const delUpload = await Upload.findById(id)
    .populate("taged")
    .populate("uploadLike");
  const like = await User.find({ likeUser: id });
  const tag = await User.find({ tagedUpload: id });
  console.log(like);
  console.log(tag);
  if (!delUpload) {
    return res.sendStatus(402);
  }
  if (String(delUpload.owner) !== _id) {
    return res.sendStatus(403);
  }
  await Upload.findByIdAndDelete(id);
  await Like.deleteMany({ upload: id });
  await Comment.deleteMany({ upload: id });
  like.likeUser.pop(id);
  like.save();
  tag.tagedUpload.pop(id);
  tag.save();
  return res.sendStatus(201);
};

export const commentPost = async (req, res) => {
  const { text } = req.body;
  const owner = req.session.user._id;
  const { id } = req.params;
  if (text === "") {
    return res.sendStatus(400);
  }
  const commentCreate = await Comment.create({
    owner,
    upload: id,
    text,
  });
  const user = await User.findById(owner);
  const upload = await Upload.findById(id);
  user.commentUser.push(commentCreate._id);
  user.save();
  upload.uploadComment.push(commentCreate._id);
  upload.save();
  return res.sendStatus(201);
};

export const tagPost = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const user = await User.findById(_id);
  const upload = await Upload.findById(id);
  const exists = await User.findOne({ $and: [{ _id }, { tagedUpload: id }] });
  if (exists) {
    user.tagedUpload.pop(exists);
    user.save();
    upload.taged.pop(_id);
    upload.save();
    return res.sendStatus(202);
  }
  user.tagedUpload.push(id);
  user.save();
  upload.taged.push(_id);
  upload.save();
  return res.sendStatus(201);
};

export const postDetail = async (req, res) => {
  const { text } = req.body;
  const { _id } = req.session.user;
  const postId = req.params.id;
  const createComment = await Comment.create({
    owner: _id,
    upload: postId,
    text,
  });
  const user = await User.findOne({ _id });
  const post = await Upload.findOne({ _id: postId });
  user.commentUser.push(createComment);
  post.uploadComment.push(createComment);
  user.save();
  post.save();
  return res.sendStatus(201);
};

export const delComment = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { _id } = req.session.user;
  const comment = await Comment.findById(id);
  const user = await User.findOne({ _id });
  const post = await Upload.findOne({ _id: comment.upload._id });
  if (!post) {
    return;
  }
  if (!user) {
    return;
  }
  await Comment.findByIdAndDelete(id);
  user.commentUser.pop(comment);
  user.save();
  post.uploadComment.pop(comment);
  post.save();
  return res.sendStatus(200);
};
export const followPost = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const me = await User.findById(_id);
  const you = await User.findById(id);
  if (id === _id) {
    return res.sendStatus(401);
  }
  const exists = await User.exists({ $and: [{ _id: id }, { follower: _id }] });
  if (exists) {
    me.follow.pop(you);
    me.save();
    you.follower.pop(me);
    you.save();
    return res.sendStatus(201);
  } else {
    me.follow.push(you);
    me.save();
    you.follower.push(me);
    you.save();
    return res.sendStatus(200);
  }
};
