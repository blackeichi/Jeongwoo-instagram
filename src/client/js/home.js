const deleteNo = document.querySelectorAll(".deleteNo");
const trashIcon = document.querySelectorAll(".fa.fa-trash");
const deleteYes = document.querySelectorAll(".deleteYes");
const deleteText = document.querySelectorAll(".deleteText");

let setOpen = false;

console.log(window.screenY);

const wheelChange = (event) => {
  setOpen = false;
  deleteText.style.display = "none";
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
  console.log(status);
};
const clikedTrash = (event) => {
  setOpen = !setOpen;
  const div = event.target.parentElement;
  const box = div.children[1];
  if (setOpen) {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
};

for (i = 0; i < trashIcon.length; i++) {
  trashIcon[i].addEventListener("click", clikedTrash);
  deleteNo[i].addEventListener("click", clikedNo);
  deleteYes[i].addEventListener("click", clickedYes);
}
