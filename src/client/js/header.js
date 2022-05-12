const searchBar = document.querySelector("input");
const searchBox = document.getElementById("searchBox");
const searchCancle = document.getElementById("searchCancle");
const home = document.querySelector("#tabbar :nth-child(1)");
const upload = document.querySelector("#tabbar :nth-child(3)");
searchCancle.style.display = "none";

const path = window.location.pathname;

if (path === "/home") {
  home.style.color = "black";
} else if (path === "/upload") {
  upload.style.color = "black";
}

const handleClick = () => {
  searchBar.value = "";
  console.log("click");
};
const onFocus = (event) => {
  searchBox.style.display = "none";
  searchBar.style.paddingLeft = "10px";
  searchCancle.style.display = "flex";
};
const offFocus = () => {
  setTimeout(() => {
    searchCancle.style.display = "none";
  }, 100);
  searchBox.style.display = "flex";
  searchBar.style.paddingLeft = "40px";
};

searchCancle.addEventListener("click", handleClick);
searchBar.addEventListener("focus", onFocus);
searchBar.addEventListener("focusout", offFocus);
