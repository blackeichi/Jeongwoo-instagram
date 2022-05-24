import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  upload: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Upload",
  },
  text: { type: String, required: true },
  createdAt: { type: Date, required: true, trim: true, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
