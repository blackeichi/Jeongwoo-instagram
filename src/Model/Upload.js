import { create } from "connect-mongo";
import mongoose from "mongoose";

const uploadShema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  text: { type: String },
  createdAt: { type: Date, required: true, trim: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  like: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});
const Upload = mongoose.model("Upload", uploadShema);
export default Upload;
