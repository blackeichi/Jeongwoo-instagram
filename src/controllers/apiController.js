import Like from "../Model/Like";
import Upload from "../Model/Upload";
import Comment from "../Model/Comment";
import regeneratorRuntime, { async } from "regenerator-runtime";
import User from "../Model/User";

export const like = async (req, res) => {
  const { user } = req.session;
  const { id } = req.params;
  const post = await Upload.findById(id);
  if (!post) {
    return res.sendStatus(402);
  }
  const userExitst = await Like.exists({
    $and: [{ owner: user._id }, { upload: id }],
  });
  if (userExitst) {
    return res.sendStatus(404);
  }
  if (user._id === String(post.owner)) {
    return res.sendStatus(403);
  }
  const createLike = await Like.create({
    owner: user._id,
    upload: id,
  });
  post.uploadLike.push(createLike._id);
  post.save();

  return res.sendStatus(200);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const delUpload = await Upload.findById(id);
  if (!delUpload) {
    return res.sendStatus(402);
  }
  if (String(delUpload.owner) !== _id) {
    return res.sendStatus(403);
  }

  await Upload.deleteOne({ id });
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
  const exists = await User.findOne({ tagedUpload: id });
  if (exists) {
    user.tagedUpload.pop(exists);
    user.save();
    return res.sendStatus(202);
  }
  user.tagedUpload.push(id);
  user.save();
  return res.sendStatus(201);
};
