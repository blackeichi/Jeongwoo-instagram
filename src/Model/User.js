import bcrypt from "bcrypt";
import mongoose, { mongo } from "mongoose";
import regeneratorRuntime from "regenerator-runtime";

const userSchema = new mongoose.Schema({
  avartarUrl: String,
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  name: { type: String, required: true },
  upload: [{ type: mongoose.Schema.Types.ObjectId, ref: "Upload" }],
  commentuser: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  tagedupload: [{ type: mongoose.Schema.Types.ObjectId, ref: "Upload" }],
  likeuser: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
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
