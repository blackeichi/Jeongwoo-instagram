import regeneratorRuntime from "regenerator-runtime";
const like = document.querySelectorAll(".fa.fa-heart-o");

const clickLike = async (event) => {
  const clicked = 1;
  const postId = event.target.dataset.id;
  const { status } = await fetch(`/api/${postId}/like`, {
    method: "POST",
    body: JSON.stringify({ clicked }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (status === 200) {
    const i = event.target;
    const span = event.target.parentElement;
    const div = span.children[1];
    const p = div.children[1];
    p.innerText = Number(event.target.dataset.num) + 1;
    i.style.color = "tomato";
  } else if (status === 404) {
    alert("이미 좋아요를 누르셨습니다.");
  } else if (status === 403) {
    alert("본인의 게시물은 좋아요를 누를 수 없습니다.");
  } else if (status === 403) {
    alert("비정상적인 접근입니다.");
  }
};

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", clickLike);
  for (let j = 1; j < like[i].dataset.likeid.split(",").length; j += 4) {
    if (
      like[i].dataset.likeid
        .slice(1, -1)
        .replace(/\"/gi, "")
        .split(",")
        [j].slice(6) === like[i].dataset.userid
    ) {
      like[i].style.color = "tomato";
    }
  }
}
