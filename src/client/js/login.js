const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginBtn = document.getElementById("loginBtn");
let checkId, checkPw;
loginBtn.disabled = true;

const ableBtn = () => {
  if (checkId && checkPw) {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
    loginBtn.style.backgroundColor = "#0095F6";
  }
};

const inputCheck = (event) => {
  const data = event.target.value;
  if (data.length > 0) {
    checkId = true;
    loginId.style.backgroundColor = "#E8F0FE";
    ableBtn();
  } else {
    checkId = false;
    loginId.style.backgroundColor = "#FAFAFA";
  }
  console.log(checkId);
};
const inputCheck2 = (event) => {
  const data = event.target.value;
  if (data.length > 5) {
    checkPw = true;
    loginPw.style.backgroundColor = "#E8F0FE";
    ableBtn();
  } else {
    loginPw.style.backgroundColor = "#FAFAFA";
    checkPw = false;
  }
  console.log(checkPw);
};

loginId.addEventListener("input", inputCheck);
loginPw.addEventListener("input", inputCheck2);
