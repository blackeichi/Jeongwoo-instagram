import { async } from "regenerator-runtime";

const deleteNo = document.querySelectorAll(".deleteNo");
const trashIcon = document.querySelectorAll(".fa.fa-trash");
const deleteYes = document.querySelectorAll(".deleteYes");
const deleteText = document.querySelectorAll(".deleteText");
const commentForm = document.querySelectorAll(".postBottom_comments");
const commentInput = document.querySelectorAll(".postBottom_comments_input");
const tagIcon = document.querySelectorAll(".follow");
const overlay = document.getElementById("overlay");
const overlay_Q = document.getElementById("overlay_Q");
const overlay_yes = document.getElementById("overlay_yes");
const overlay_no = document.getElementById("overlay_no");
const followBtn = document.querySelectorAll(".fa.fa-star-o");

let setOpen = false;
let openedBox;
let clickedPostOwner = "";
let PostOwnerName = "";
let PostFollower = [];
let myId = "";
let followExist = false;

const wheelChange = (event) => {
  if (setOpen) {
    setOpen = false;
    openedBox.style.display = "none";
  }
};

const clikedNo = (event) => {
  const div = event.target.parentElement;
  div.style.display = "none";
  setOpen = false;
};

const clickedYes = async (event) => {
  const postId = event.target.dataset.id;
  const { status } = await fetch(`/api/${postId}/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (status === 201) {
    location.reload();
    alert("게시물이 삭제되었습니다.");
  } else if (status === 402) {
    alert("해당 게시물이 존재하지 않습니다.");
  } else {
    alert("비정상적인 접근입니다.");
  }
};
const clikedTrash = (event) => {
  setOpen = !setOpen;
  const div = event.target.parentElement;
  const box = div.children[1];
  if (setOpen) {
    box.style.display = "block";
    openedBox = box;
  } else {
    box.style.display = "none";
    openedBox = "";
  }
};

const commentCheck = (event) => {
  const data = event.target.value;
  const commentBtn = event.target.nextSibling;
  if (data.length > 0) {
    commentBtn.style.color = "black";
    commentBtn.style.cursor = "pointer";
    commentBtn.style.backgroundColor = "lightgray";
  } else if (data.length === 0) {
    commentBtn.style.color = "rgba(0,0,0,0.3)";
    commentBtn.style.cursor = "default";
    commentBtn.style.backgroundColor = "#fafafa";
  }
};
const commentFocus = (event) => {
  const commentBtn = event.target.nextSibling;
  event.target.style.height = "60px";
  commentBtn.style.height = "60px";
};
const commentFocusout = (event) => {
  const commentBtn = event.target.nextSibling;
  event.target.style.height = "40px";
  commentBtn.style.height = "40px";
};

const submitComment = async (event) => {
  event.preventDefault();
  const postId = event.target.dataset.id;
  const text = event.target[0].value;
  const div = event.target.parentElement;
  const form = div.children[1];
  const { status } = await fetch(`/api/${postId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (status === 201) {
    event.target[0].value = "";
    alert("댓글이 등록되었습니다.");
  } else if (status === 400) {
    alert("댓글의 내용을 입력하여 주세요.");
  } else {
    alert("비정상 접근입니다.");
  }
};

const clickTag = async (event) => {
  const icon = event.target;
  const postId = event.target.parentElement.dataset.id;
  const { status } = await fetch(`/api/${postId}/tag`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (status === 201) {
    icon.style.color = "black";
    alert("Taged:)");
  } else if (status === 202) {
    icon.style.color = "rgba(0, 0, 0, 0.7)";
    alert("Untaged!");
  }
};

const closeOverlay = () => {
  overlay.style.display = "none";
};

const clickFollowBtn = (event) => {
  overlay.style.display = "flex";
  clickedPostOwner = event.target.dataset.id;
  PostOwnerName = event.target.dataset.name;
  PostFollower = event.target.dataset.follower;
  myId = event.target.dataset.myid;
  PostFollower = PostFollower.slice(1, -1);
  PostFollower = PostFollower.replace(/\"/gi, "").split(",");
  overlay_Q.innerText = PostOwnerName + "님과 팔로우 하시겠습니까? 😊";
  //큰따옴표 모두 제거 및 배열화.
  console.log(PostFollower);
  console.log(String(myId));
  for (let j = 0; j < PostFollower.length; j++) {
    if (PostFollower[j] === String(myId)) {
      followExist = true;
    }
  }
  if (followExist) {
    overlay_Q.innerText = PostOwnerName + "님과 언팔로우 하시겠습니까? 😢";
    overlay_yes.innerText = "언팔로우하기";
    followExist = false;
  }
};

const following = async (event) => {
  overlay.style.display = "none";
  const { status } = await fetch(`/api/${clickedPostOwner}/follow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (status === 200) {
    alert(PostOwnerName + "님을 팔로우하였습니다.😁");
    location.reload();
  } else if (status === 201) {
    alert(PostOwnerName + "님을 언팔로우하였습니다.😢");
    location.reload();
  }
  clickedPostOwner = "";
  PostOwnerName = "";
  PostFollower = [];
  myId = "";
};
for (let i = 0; i < trashIcon.length; i++) {
  trashIcon[i].addEventListener("click", clikedTrash);
  deleteNo[i].addEventListener("click", clikedNo);
  deleteYes[i].addEventListener("click", clickedYes);
}
for (let i = 0; i < tagIcon.length; i++) {
  commentForm[i].addEventListener("submit", submitComment);
  commentInput[i].addEventListener("input", commentCheck);
  commentInput[i].addEventListener("focus", commentFocus);
  commentInput[i].addEventListener("focusout", commentFocusout);
  for (
    let j = 0;
    j <
    tagIcon[i].dataset.tagedid.slice(1, -1).replace(/\"/gi, "").split(",")
      .length;
    j++
  ) {
    if (
      tagIcon[i].dataset.tagedid.slice(1, -1).replace(/\"/gi, "").split(",")[
        j
      ] === tagIcon[i].dataset.userid
    ) {
      tagIcon[i].style.color = "black";
    }
  }
  for (
    let j = 0;
    j <
    followBtn[i].dataset.follower.slice(1, -1).replace(/\"/gi, "").split(",")
      .length;
    j++
  ) {
    if (
      followBtn[i].dataset.follower.slice(1, -1).replace(/\"/gi, "").split(",")[
        j
      ] === followBtn[i].dataset.myid
    ) {
      followBtn[i].style.color = "#ffcc5c";
    }
  }
  tagIcon[i].addEventListener("click", clickTag);
  followBtn[i].addEventListener("click", clickFollowBtn);
}
document.addEventListener("wheel", wheelChange);
overlay.addEventListener("click", closeOverlay);
overlay_no.addEventListener("click", closeOverlay);
overlay_yes.addEventListener("click", following);
