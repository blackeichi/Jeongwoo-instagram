import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
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
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: { type: Date, required: true, trim: true, default: Date.now },
});

const Like = mongoose.model("Like", likeSchema);
export default Like;
