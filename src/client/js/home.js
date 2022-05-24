import { async } from "regenerator-runtime";

const deleteNo = document.querySelectorAll(".deleteNo");
const trashIcon = document.querySelectorAll(".fa.fa-trash");
const deleteYes = document.querySelectorAll(".deleteYes");
const deleteText = document.querySelectorAll(".deleteText");
const commentForm = document.querySelectorAll(".postBottom_comments");
const commentInput = document.querySelectorAll(".postBottom_comments_input");
const tagIcon = document.querySelectorAll(".follow");

let setOpen = false;
let openedBox;

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
  console.log(status);
};
const clikedTrash = (event) => {
  setOpen = !setOpen;
  const div = event.target.parentElement;
  const box = div.children[1];
  if (setOpen) {
    box.style.display = "block";
    console.log(box);
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
  } else if (data.length === 0) {
    commentBtn.style.color = "rgba(0,0,0,0.3)";
    commentBtn.style.cursor = "default";
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
    icon.className = "fa fa-times";
    alert("Taged:)");
  } else if (status === 202) {
    icon.className = "fa fa-bookmark-o";
    alert("Untaged!");
  }
};

for (let i = 0; i < trashIcon.length; i++) {
  trashIcon[i].addEventListener("click", clikedTrash);
  deleteNo[i].addEventListener("click", clikedNo);
  deleteYes[i].addEventListener("click", clickedYes);
  commentForm[i].addEventListener("submit", submitComment);
  commentInput[i].addEventListener("input", commentCheck);
  commentInput[i].addEventListener("focus", commentFocus);
  commentInput[i].addEventListener("focusout", commentFocusout);
  tagIcon[i].addEventListener("click", clickTag);
}
document.addEventListener("wheel", wheelChange);
