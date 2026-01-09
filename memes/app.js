async function randoms() {
  for (let i = 1; i < 5; i++) {
    const result = await (
      await fetch(`http://alpha-meme-maker.herokuapp.com`)
		);

		console.log(result);

			meme.innerHTML += `<img  href="image" title="image"><br>`;

    /* {
			"albumId":1,
			"id":1,
			"title":"accusamus beatae ad facilis cum similique qui sunt",
			"url":"https://via.placeholder.com/600/92c952",
			"thumbnailUrl":"https://via.placeholder.com/150/92c952"
		} */
  }
}
const button = document.querySelector(`button`);
const meme = document.querySelector(`.meme`);
button.addEventListener(`click`, randoms);
