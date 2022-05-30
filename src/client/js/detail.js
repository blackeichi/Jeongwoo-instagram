import { async } from "regenerator-runtime";

const detailForm = document.getElementById("comment_Form");
const detailInput = document.getElementById("comment_Form_input");
const detailBtn = document.getElementById("comment_Form_btn");
const commentForm = document.getElementById("comment_Form");
const deleteIcon = document.querySelectorAll(".fa.fa-times");
const getlink = document.getElementById("getlink");

const inputDetail = (event) => {
  const data = event.target.value;
  if (data.length > 0) {
    detailBtn.style.color = "black";
    detailBtn.style.cursor = "pointer";
  } else {
    detailBtn.style.color = "rgba(0,0,0,0.3)";
    detailBtn.style.cursor = "default";
  }
};

const submitComment = async (event) => {
  const text = event.target[0].value;
  const postId = commentForm.dataset.id;
  const { status } = await fetch(`/api/comments/${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (status === 201) {
    alert("댓글이 등록되었습니다.😊");
  }
};

const deleteComment = async (event) => {
  const div = event.target.parentElement;
  const { commentid } = event.target.dataset;
  const { post } = event.target.dataset;
  const { status } = await fetch(`/api/comments/delete/${commentid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ post }),
  });
};

const copyLink = () => {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  const url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("링크가 복사되었습니다.");
};

detailInput.addEventListener("input", inputDetail);
commentForm.addEventListener("submit", submitComment);
for (let i = 0; i < deleteIcon.length; i++) {
  deleteIcon[i].addEventListener("click", deleteComment);
}
getlink.addEventListener("click", copyLink);
