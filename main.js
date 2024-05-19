const URL='https://foodish-api.com/images/pizza/';

fetch(URL)
.then(res => res.json())
.then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
});

