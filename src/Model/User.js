import bcrypt from "bcrypt";
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  avartarUrl: String,
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  name: { type: String, required: true },
  commentUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  tagedUpload: [{ type: mongoose.Schema.Types.ObjectId, ref: "Upload" }],
  likeUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "Upload" }],
  loveMe: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  follow: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  follower: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});
const User = mongoose.model("User", userSchema);
export default User;
