document
  .querySelector("article button")
  .addEventListener("click", (e) =>
    document
      .querySelectorAll(".more")
      .forEach((more) => {
        more.classList.toggle("toggled")
        e.target.textContent = more.classList.contains('toggled') ? 'Collapse':'Expand'
    })
  );

function search() {
  let searchTerm = document.querySelector("div:has([type=search]) input").value;

  document
    .querySelectorAll(".more")
    .forEach((more) => more.classList.add("toggled"));

  if (searchTerm !== "") {
    let regex = new RegExp(searchTerm, "gi");
    document
      .querySelectorAll("article[text] *")
      .forEach(
        (item) =>
          (item.innerHTML = item.textContent.replace(regex, "<mark>$&</mark>"))
      );

    let item = document.querySelector("[result]");
    item.textContent = "";
    const searchTerms = document.querySelectorAll("mark");
    searchTerms.forEach((a, b) => {
      const text = a.innerText;
      a.id = b;
      item.innerHTML += `<p>${b + 1}. <a href=#${b}>${text}</a></p>`;
    });
  }
}

document
  .querySelector("div:has([type=search]) button:first-of-type")
  .addEventListener("click",()=>{search()});

document
  .querySelector("div:has([type=search]) *:first-child")
  .addEventListener("keypress",(e)=>{
    if (e.key == 'Enter') search()
    }
);
