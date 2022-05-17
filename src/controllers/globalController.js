import User from "../Model/User";
import bcrypt from "bcrypt";
import Upload from "../Model/Upload";

export const handleLogin = (req, res) => {
  return res.render("login");
};
export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  const exists = await User.findOne({ id });
  if (!exists) {
    return res.status(400).render("login", {
      errorMessage:
        "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.",
    });
  }
  const ok = await bcrypt.compare(password, exists.password);
  if (!ok) {
    return res.status(400).render("login", {
      errorMessage: "잘못된 비밀번호입니다. 다시 확인하세요.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = exists;
  return res.redirect("/home");
};
export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = async (req, res) => {
  const { id, name, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });
  }
  if (password.length < 6) {
    return res.status(400).render("join", {
      errorMessage: "패스워드를 6자리 이상 입력해주세요.",
    });
  }
  const exist = await User.exists({ id });
  if (exist) {
    return res.status(400).render("join", {
      errorMessage: "이미 존재하는 번호/이메일주소/ID 입니다.",
    });
  }
  try {
    await User.create({
      id,
      name,
      password,
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("join", {
      errorMessage: error._message,
    });
  }
};
export const getHome = async (req, res) => {
  const uploads = await Upload.find({})
    .sort({ createdAt: "desc" })
    .populate("owner");
  return res.render("home", { uploads });
};
export const logOut = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const getUpload = (req, res) => {
  return res.render("upload");
};
export const postUpload = async (req, res) => {
  const { text, hashtags } = req.body;
  const file = req.file;
  const { _id } = req.session.user;
  await Upload.create({
    fileUrl: file ? file.path : fileUrl,
    text,
    hashtags,
    owner: _id,
  });
  return res.redirect("/home");
};
export const profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(400).render("404", { errorMessage: "User not found." });
  }
  const uploads = await Upload.find({ owner: user._id });
  return res.render("profile", { uploads, count: uploads.length, id });
};
export const getEditP = async (req, res) => {
  return res.send("hi");
};
export const postEditP = (req, res) => {
  return res.send("hi");
};
