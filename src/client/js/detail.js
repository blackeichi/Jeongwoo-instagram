import { async } from "regenerator-runtime";

const detailForm = document.getElementById("comment_Form");
const detailInput = document.getElementById("comment_Form_input");
const detailBtn = document.getElementById("comment_Form_btn");
const commentForm = document.getElementById("comment_Form");

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

detailInput.addEventListener("input", inputDetail);
commentForm.addEventListener("submit", submitComment);
