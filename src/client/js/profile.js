import regeneratorRuntime from "regenerator-runtime";
const tags_one = document.getElementById("tags_one");
const tags_two = document.getElementById("tags_two");
const tags_three = document.getElementById("tags_three");
const post = document.getElementById("profile_post");
const follow = document.getElementById("profile_follow");
const taged = document.getElementById("profile_taged");

const profollowbtn = document.getElementById("profile_followbtn");
if (profollowbtn) {
  const profileFollwer = profollowbtn.dataset.follower
    .slice(1, -1)
    .replace(/\"/gi, "")
    .split(",");
  console.log(profileFollwer);
  const sessionUser = profollowbtn.dataset.myid;
  const clickedPostOwner = profollowbtn.dataset.id;
  const PostOwnerName = profollowbtn.dataset.name;
  for (let i = 0; i < profileFollwer.length; i++) {
    if (profileFollwer[i] === sessionUser) {
      profollowbtn.style.color = "#ffcc5c";
    } else {
    }
  }

  const ClickfollowBtn = async () => {
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
  };
  profollowbtn.addEventListener("click", ClickfollowBtn);
}

const clickOne = () => {
  tags_one.style.color = "black";
  tags_two.style.color = "darkgray";
  tags_three.style.color = "darkgray";
  tags_one.style.borderTop = "1px solid black";
  tags_two.style.borderTop = "none";
  tags_three.style.borderTop = "none";
  post.style.display = "grid";
  follow.style.display = "none";
  taged.style.display = "none";
};
const clickTwo = () => {
  tags_one.style.color = "darkgray";
  tags_two.style.color = "black";
  tags_three.style.color = "darkgray";
  tags_one.style.borderTop = "none";
  tags_two.style.borderTop = "1px solid black";
  tags_three.style.borderTop = "none";
  post.style.display = "none";
  follow.style.display = "grid";
  taged.style.display = "none";
};
const clickThree = () => {
  tags_one.style.color = "darkgray";
  tags_two.style.color = "darkgray";
  tags_three.style.color = "black";
  tags_one.style.borderTop = "none";
  tags_two.style.borderTop = "none";
  tags_three.style.borderTop = "1px solid black";
  post.style.display = "none";
  follow.style.display = "none";
  taged.style.display = "grid";
};

tags_one.addEventListener("click", clickOne);
tags_two.addEventListener("click", clickTwo);
tags_three.addEventListener("click", clickThree);
