import Like from "../Model/Like";
import Upload from "../Model/Upload";

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
  console.log("delete");
  return res.sendStatus(201);
};
