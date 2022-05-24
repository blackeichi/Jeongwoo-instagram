const detailForm = document.getElementById("comment_Form");
const detailInput = document.getElementById("comment_Form_input");
const detailBtn = document.getElementById("comment_Form_btn");

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

detailInput.addEventListener("input", inputDetail);
