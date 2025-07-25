const generatePassword = document.querySelector(".generate");
const copyPassword = document.querySelector(".copy");
const lengthPassword = document.querySelector("#pLength");
const chars = `1234567890-=qwertyuio[\]asdfghjkl;'zxcvbnm,./><?:"{}_+!@~#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM`;
let output = document.querySelector('.output')
let password = "";
generatePassword.disabled = true;
copyPassword.disabled = true;
output.textContent = 'Select length..'

generatePassword.addEventListener("click", generate);

lengthPassword.addEventListener("input", () => {
  if (lengthPassword.value <= 8) {
    output.textContent = "Enter a length > 8";
    generatePassword.disabled = true;
    copyPassword.disabled = true;
  } else {
    copyPassword.disabled = false;
    generatePassword.disabled = false;
    output.textContent = 'Click generate'
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
