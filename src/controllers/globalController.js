import User from "../Model/User";
import bcrypt from "bcrypt";
import Upload, { formatHashtags } from "../Model/Upload";
import Comment from "../Model/Comment";
import { async } from "regenerator-runtime";
import Like from "../Model/Like";

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
    .populate("owner")
    .populate("uploadlike");
  const { _id } = req.session.user;
  const users = await User.find({ _id: { $ne: _id } });
  return res.render("home", { uploads, users });
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
  const uploaded = await Upload.create({
    fileUrl: file ? file.location : fileUrl,
    text,
    hashtags,
    owner: _id,
  });
  const user = await User.findById(_id);
  user.upload.push(uploaded);
  user.save();
  return res.redirect("/home");
};
export const profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id)
    .populate("tagedupload")
    .populate("follow");
  if (!user) {
    return res.status(400).render("404", { errorMessage: "User not found." });
  }
  const uploads = await Upload.find({ owner: user._id });
  return res.render("profile", { uploads, user });
};
export const getEditP = async (req, res) => {
  return res.render("edit");
};
export const postEditP = async (req, res) => {
  const { name, username, password, password2 } = req.body;
  const file = req.file;
  const user = req.session.user;
  const before = await User.findById(user._id);
  const ok = await bcrypt.compare(password, before.password);
  const exist = await User.findOne({ id: username });

  if (password && password2) {
    if (password2.length < 6) {
      return res.status(400).render("edit", {
        errorMessage: "새 비밀번호는 최소 6자 이상이어야 합니다.",
      });
    } else if (!ok) {
      return res
        .status(400)
        .render("edit", { errorMessage: "현재 비밀번호가 다릅니다." });
    } else {
      await User.findByIdAndUpdate(user._id, {
        avartarUrl: file ? file.location : user.avartarUrl,
        name,
        id: username,
      });
      before.password = password2;
      await before.save();
      return res.redirect("/logout");
    }
  } else {
    if (user.id !== username) {
      if (exist) {
        return res.status(400).render("edit", {
          errorMessage: "이미 존재하는 '사용자 이름' 입니다.",
        });
      }
    }
    await User.findByIdAndUpdate(user._id, {
      avartarUrl: file ? file.location : user.avartarUrl,
      name,
      id: username,
    });
    req.session.user = {
      ...req.session.user,
      avartarUrl: file ? file.location : user.avartarUrl,
      name,
      id: username,
    };
    return res.redirect("/profile/" + user._id);
  }
};

export const getDetail = async (req, res) => {
  const { id } = req.params;
  const comments = await Comment.find({ upload: id })
    .sort({ createdAt: "desc" })
    .populate("owner");
  if (!comments) {
    alert("Sorry, nothing found");
    return res.render("home");
  }
  return res.render("detail", { comments, post: id });
};

export const search = async (req, res) => {
  const keyword = req.query.keyword;
  let users = [];
  if (keyword) {
    users = await User.find({
      id: { $regex: new RegExp(keyword, "i") },
    });
  }
  return res.render("search", { users });
};
export const getLike = async (req, res) => {
  const { _id } = req.session.user;
  const likeyou = await Like.find({
    owner: _id,
  })
    .populate("receiver")
    .populate("upload");
  const likeme = await Like.find({
    receiver: _id,
  })
    .populate("owner")
    .populate("upload");
  return res.render("like", { likeyou, likeme });
};
