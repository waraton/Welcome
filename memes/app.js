const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://dad-jokes.p.rapidapi.com/random/joke');
xhr.setRequestHeader('x-rapidapi-host', 'dad-jokes.p.rapidapi.com');

xhr.send(data);