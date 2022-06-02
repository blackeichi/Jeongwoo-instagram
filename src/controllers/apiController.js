import Like from "../Model/Like";
import Upload from "../Model/Upload";
import Comment from "../Model/Comment";
import regeneratorRuntime, { async } from "regenerator-runtime";
import User from "../Model/User";

export const like = async (req, res) => {
  const { _id } = req.session.user;
  const { id } = req.params;
  const post = await Upload.findById(id).populate("owner");
  const receivedUser = await User.findById(post.owner._id);
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
  const like = await Like.create({
    owner: _id,
    upload: id,
    receiver: post.owner._id,
  });
  post.uploadlike.push(like);
  post.save();
  receivedUser.likeuser.push(like);
  receivedUser.save();
  user.likeuser.push(like);
  user.save();
  return res.sendStatus(200);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const delUpload = await Upload.findById(id)
    .populate("taged")
    .populate("uploadlike")
    .populate("uploadcomment");

  if (!delUpload) {
    return res.sendStatus(402);
  }
  if (String(delUpload.owner) !== _id) {
    return res.sendStatus(403);
  }
  await Upload.findByIdAndDelete(id);
  const user = await User.findById(_id);
  user.upload.pop(delUpload);
  user.save();
  await Like.deleteMany({ upload: id });
  await Comment.deleteMany({ upload: id });
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
  user.commentuser.push(commentCreate._id);
  user.save();
  upload.uploadcomment.push(commentCreate._id);
  upload.save();
  return res.sendStatus(201);
};

export const tagPost = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const user = await User.findById(_id);
  const upload = await Upload.findById(id);
  const exists = await User.findOne({ $and: [{ _id }, { tagedupload: id }] });
  if (exists) {
    user.tagedupload.pop(exists);
    user.save();
    upload.taged.pop(_id);
    upload.save();
    return res.sendStatus(202);
  }
  user.tagedupload.push(id);
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
  user.commentuser.push(createComment);
  post.uploadcomment.push(createComment);
  user.save();
  post.save();
  return res.sendStatus(201);
};

export const delComment = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const comment = await Comment.findById(id);
  const user = await User.findOne({ _id });
  const post = await Upload.findOne({ _id: comment.upload });
  if (!post) {
    return res.sendStatus(400);
  }
  if (!user) {
    return res.sendStatus(400);
  }
  await Comment.findByIdAndDelete(id);
  user.commentuser.pop(comment);
  user.save();
  post.uploadcomment.pop(comment);
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
