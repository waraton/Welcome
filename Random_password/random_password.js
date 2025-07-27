const generatePassword = document.querySelector(".generate");
const copyPassword = document.querySelector(".copy");
const lengthPassword = document.querySelector("#pLength");
const chars = `1234567890-=qwertyuio[\]asdfghjkl;'zxcvbnm,./><?:"{}_+!@~#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM`;
let output = document.querySelector(".output");
let password = "";

const showOrHide = document.getElementById("showOrHide");

generatePassword.disabled = true;
copyPassword.disabled = true;
output.textContent = "Select length..";
output.classList.add('error')

generatePassword.addEventListener("click", generate);

lengthPassword.addEventListener("input", () => {
  if (lengthPassword.value <= 8) {
    output.textContent = "Enter a length > 8";
    generatePassword.disabled = true;
    copyPassword.disabled = true;
    output.classList.add('error')
  } else {
    copyPassword.disabled = false;
    generatePassword.disabled = false;
    output.textContent = "Click generate";
    output.classList.remove('error')
  }
});

copyPassword.addEventListener("click", copy);

function generate() {
  if (lengthPassword.value >= 8) {
    for (let i = 0; i < lengthPassword.value; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length) + 1);
    }
  }

  output.textContent = password;
  password = "";
}

function copy() {
  navigator.clipboard.writeText(document.querySelector("output").textContent);
}

function showHide() {
  showOrHide.type = showOrHide.type === "text" ? "password" : "text";
  document.querySelector("[show]").textContent =
    showOrHide.type === "text" ? "Hide password" : "Show password";
}

function paste() {
  navigator.clipboard.readText().then((text) => (showOrHide.value = text));
}
document.querySelector("[paste]").addEventListener("click", paste);
document.querySelector("[show]").addEventListener("click", showHide);
