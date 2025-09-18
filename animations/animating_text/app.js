const animationText = document.getElementById('animation');
const text = animationText.textContent.split('');
animationText.textContent = ''
text.forEach(letter => {
  animationText.innerHTML += `<span class="letter">${letter}</span>`
})

document.querySelectorAll('.letter').forEach((char, index) => {
  char.style.animationDelay = `${index/4}s`
  char.style.animationDuration = `${Math.random()*2+5}s,2s`
  setInterval(() => {
    char.style.color = `hsl(${Math.random()*360},50%,50%)`
  }, Math.random()*275+155);
})
