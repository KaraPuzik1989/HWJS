const sidePanel = document.querySelector(".side-panel");
const main = document.querySelector(".main");
const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");

burgerBtn.addEventListener("click", () => {
  sidePanel.style.width = "300px";
  main.style.marginLeft = "300px";
  burgerBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  sidePanel.style.width = "0";
  main.style.marginLeft = "0";
  burgerBtn.style.display = "block";
});
