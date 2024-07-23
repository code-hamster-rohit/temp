document.addEventListener("DOMContentLoaded", () => {
  const logosContainer = document.querySelector(".logos-container .logos");
  const logos = logosContainer.innerHTML;
  logosContainer.innerHTML += logos;
});