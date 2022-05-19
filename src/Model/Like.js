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
});

const Like = mongoose.model("Like", likeSchema);
export default Like;
