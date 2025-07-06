const text = document.getElementById('text');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const capitalize = document.getElementById('capitalize');
const output = document.querySelector('output')

const button = document.querySelectorAll('button')
editText(button)

function editText(button){
    button.forEach((btn,ind)=>{
        btn.addEventListener('click',()=>{
            output.classList.remove('uppercase','lowercase','capitalize')
            if (ind < 3){
                button[0].classList.remove('active')
                button[1].classList.remove('active')
                button[2].classList.remove('active')
                output.classList.toggle(btn.id)
                btn.classList.toggle('active')
        } else{ 
            btn.classList.toggle('active')
            output.classList.toggle(btn.id)
        }
    })
    })
}

text.addEventListener('input',()=>{
    output.textContent = text.value
})