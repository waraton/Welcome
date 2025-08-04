const images = document.querySelectorAll('img');

images.forEach((image)=>{
  image.alt = image.parentElement.nextElementSibling.textContent;
})