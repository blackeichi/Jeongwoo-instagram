const id = document.getElementById("id");
const name = document.getElementById("name");
const password = document.getElementById("password");
const confirmPw = document.getElementById("confirmPw");
const joinBtn = document.getElementById("joinBtn");
let idCheck, nameCheck, passwordCheck, confirmPwCheck;
joinBtn.disabled = true;

const ableBtn = () => {
  if (idCheck && nameCheck && passwordCheck && confirmPwCheck) {
    joinBtn.disabled = false;
    joinBtn.style.cursor = "pointer";
    joinBtn.style.backgroundColor = "#0095F6";
  }
};

const inputCheck = (event) => {
  const data = event.target.value;
  if (data.length > 0) {
    idCheck = true;
    id.style.backgroundColor = "#E8F0FE";
    ableBtn();
  } else {
    idCheck = false;
    id.style.backgroundColor = "#FAFAFA";
  }
};
const inputCheck2 = (event) => {
  const data = event.target.value;
  if (data.length > 0) {
    nameCheck = true;
    name.style.backgroundColor = "#E8F0FE";
    ableBtn();
  } else {
    nameCheck = false;
    name.style.backgroundColor = "#FAFAFA";
  }
};
const inputCheck3 = (event) => {
  const data = event.target.value;
  if (data.length > 5) {
    passwordCheck = true;
    password.style.backgroundColor = "#E8F0FE";
    ableBtn();
  } else {
    passwordCheck = false;
    password.style.backgroundColor = "#FAFAFA";
  }
};
const inputCheck4 = (event) => {
  const data = event.target.value;
  if (data.length > 5) {
    confirmPwCheck = true;
    confirmPw.style.backgroundColor = "#E8F0FE";
    ableBtn();
  } else {
    confirmPwCheck = false;
    confirmPw.style.backgroundColor = "#FAFAFA";
  }
};

id.addEventListener("input", inputCheck);
name.addEventListener("input", inputCheck2);
password.addEventListener("input", inputCheck3);
confirmPw.addEventListener("input", inputCheck4);
