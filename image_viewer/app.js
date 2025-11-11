const load = document.querySelector("input");
const img = document.querySelector("img");
const close = document.querySelector(".icon .close");

load.addEventListener("change", (e) => {
  loadFile(e);
});

function loadFile(event) {
  img.classList.add("active");
  close.classList.add("exit");
  img.src = URL.createObjectURL(event.target.files[0]);

  close.addEventListener("click", () => {
    img.classList.remove("active");
    close.classList.remove("exit");
  });
}