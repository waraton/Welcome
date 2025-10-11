const ETarget = document.querySelector("body > section");
const auto = document.querySelector("[auto]");
const navButtons = document.querySelectorAll("nav button");
const forms = document.querySelectorAll("form");
const autoDependant = document.querySelector("[autoDependant]");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((btn) => btn.classList.remove("running"));
    
    button.classList.add("running");
    console.log(button.dataset);
    
    forms.forEach((form) => {
      if (form.id === button.dataset.mapped) form.classList.add("active");
      else form.classList.remove("active");
    });
  });
});

auto.addEventListener("change", () => {
  if (!auto.checked) {
    autoDependant.classList.add("disabled");
    autoDependant.firstElementChild.disabled = true;
  } else {
    autoDependant.classList.remove("disabled");
    autoDependant.firstElementChild.checked = false;
    autoDependant.firstElementChild.disabled = false;
  }
});

document.addEventListener("click", (E) => {
  if (ETarget.contains(E.target)) {
    ETarget.classList.remove("deactivated");
  } else {
    ETarget.classList.add("deactivated");
  }
});