const inputs = document.querySelectorAll('input');

inputs.forEach(input =>{
    input.addEventListener('input',()=>{
      const vert = inputs[0].value
      const hor = inputs[1].value
      const blur = inputs[2].value
      const spread = inputs[3].value
      const color = inputs[4].value

    document.querySelector('.obj').style.boxShadow = `${vert}px  ${hor}px  ${blur}px  ${spread}px  ${color}`;

    document.querySelector('.value').textContent = `${vert}px  ${hor}px  ${blur}px  ${spread}px  ${color}`
  })
})