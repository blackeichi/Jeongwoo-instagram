const deleteNo = document.getElementById("deleteNo");
const trashIcon = document.getElementById("trashIcon");
const deleteText = document.getElementById("deleteText");
const deleteYes = document.getElementById("deleteYes");
let setOpen = false;

const clikedNo = () => {
  deleteText.style.display = "none";
  setOpen = false;
};
const clikedTrash = () => {
  setOpen = !setOpen;
  console.log(setOpen);
  if (setOpen) {
    deleteText.style.display = "block";
  } else {
    deleteText.style.display = "none";
  }
};
const clickedYes = async (event) => {
  const postId = event.target.dataset.id;
  const { status } = await fetch(`/api/${postId}/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(status);
};

deleteNo.addEventListener("click", clikedNo);
trashIcon.addEventListener("click", clikedTrash);
deleteYes.addEventListener("click", clickedYes);
