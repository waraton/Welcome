document.querySelectorAll(".jsAccordion .title span").forEach((button) => {
  button.addEventListener("click", () => {
    accordion(button);
    button.parentElement
  });
});

function accordion(x) {
  document.querySelectorAll(".jsAccordion .content").forEach((e) => {
    if (e.classList.contains("close")) {
      x.parentElement.nextElementSibling.classList.toggle("close");
      e.classList.remove("close");
      document
        .querySelectorAll(".title span")
        .forEach((span) => span.classList.remove("red"));
    } else {
      if (x.parentElement.nextElementSibling.classList.contains("close")) {
        x.parentElement.nextElementSibling.classList.remove("close");
        x.classList.remove("red");
      } else {
        x.classList.add("red");
        x.parentElement.nextElementSibling.classList.add("close");
      }
    }
  });
}
