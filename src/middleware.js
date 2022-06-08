import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import "dotenv/config";

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});
const s3ImageUploader = multerS3({
  s3: s3,
  bucket: "jeong-instagram/images",
  acl: "public-read",
});
const s3avatarUploader = multerS3({
  s3: s3,
  bucket: "jeong-instagram/avatar",
  acl: "public-read",
});

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  next();
};
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/home");
  }
};

//-----Multer
export const imgUpload = multer({
  dest: "uploads/",
  limits: { fileSize: 5000000 },
  storage: s3ImageUploader,
});
export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: { fileSize: 5000000 },
  storage: s3avatarUploader,
});
