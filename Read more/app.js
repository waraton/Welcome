document.querySelector('article button').addEventListener('click',()=>{
    document.querySelectorAll('.more').forEach(more => more.classList.toggle('toggled'))
})