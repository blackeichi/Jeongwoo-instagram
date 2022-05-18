const previewAvatar = document.getElementById("previewAvatar");
const inputAvatar = document.getElementById("inputAvatar");
const avatarInput = document.getElementById("avatarInput");
const avatarImg = document.getElementById("avatarImg");
const avatarIcon = document.getElementById("avatarIcon");

const readAvatar = (input) => {
  if (input.files && input.files[0]) {
    console.log("hi");
    const reader = new FileReader();
    previewAvatar.style.display = "block";
    avatarInput.style.display = "none";
    reader.onload = (e) => {
      previewAvatar.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
  if (avatarImg) {
    avatarImg.style.display = "none";
  } else {
    avatarIcon.style.display = "none";
  }
};
inputAvatar.addEventListener("change", (e) => {
  readAvatar(e.target);
});
