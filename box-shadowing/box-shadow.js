const inputs = document.querySelectorAll('input');
const copy = document.getElementById('copy');
const output = document.querySelector('.value')

inputs.forEach(input =>{
    input.addEventListener('input',()=>{
      const vert = inputs[0].value
      const hor = inputs[1].value
      const blur = inputs[2].value
      const spread = inputs[3].value
      const color = inputs[4].value

    document.querySelector('.obj').style.boxShadow = `${vert}px  ${hor}px  ${blur}px  ${spread}px  ${color}`;

    output.textContent = `${vert}px  ${hor}px  ${blur}px  ${spread}px  ${color}`
  })
})
copy.addEventListener(`click`, () => {
  const text = `box-shadow: ${output.textContent};\n`
  navigator.clipboard.writeText(text)
  .then(() => console.log("Text copied to clipboard"))
  .catch((err) => console.error("Error copying text: ", err));
})