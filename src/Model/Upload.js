import { create } from "connect-mongo";
import mongoose from "mongoose";

const uploadShema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  text: { type: String },
  createdAt: { type: Date, required: true, trim: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  uploadLike: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  ],
  uploadComment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  taged: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

uploadShema.pre("save", async function () {
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.startsWith("#") ? word : "#" + word));
});
const Upload = mongoose.model("Upload", uploadShema);
export default Upload;
