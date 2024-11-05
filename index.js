const bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = "#e9e9e9";

const newsElement = document.querySelector(".news");
newsElement.style.backgroundColor = "white";
newsElement.style.maxWidth = "60rem";

const headline = document.querySelector('h1');
headline.className = 'news__title';
headline.textContent = 'Aktuální novinky';

const prvniZprava = document.getElementById('zprava1');
prvniZprava.classList.add('post--main');

const obrazek = document.querySelector('#zprava3 img');
obrazek.src = 'images/zprava3-novy.jpg';
