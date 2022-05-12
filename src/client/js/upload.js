const previewImage = document.getElementById("previewImage");
const inputImage = document.getElementById("inputImage");
const fileInput = document.getElementById("fileInput");

const readImg = (input) => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    previewImage.style.display = "block";
    fileInput.style.display = "none";
    reader.onload = (e) => {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};
inputImage.addEventListener("change", (e) => {
  readImg(e.target);
});
