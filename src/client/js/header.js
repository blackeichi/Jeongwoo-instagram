const home = document.querySelector("#tabbar :nth-child(1)");
const upload = document.querySelector("#tabbar :nth-child(2)");
const like = document.querySelector("#tabbar :nth-child(3)");
const profile = document.querySelector("#tabbar :nth-child(5)");
const footer = document.querySelector("footer");

const path = window.location.pathname;

console.log(path.slice(0, 6));

if (path === "/home") {
  home.style.color = "black";
} else if (path === "/upload") {
  upload.style.color = "black";
} else if (path.slice(0, 8) === "/profile") {
  profile.style.color = "black";
  footer.style.display = "none";
} else if (path.slice(0, 5) === "/like") {
  like.style.color = "black";
}
