

//images carrousel rectifier

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

// elements du dom
const carrouselImage = document.querySelectorAll('#banner .banner-img'); // selection de la totalité du contenu de l'id
const dotsContainer = document.querySelector('#banner .dots'); // selection boutons 
let currentSlideIndex = 0;// variable index indiquand image actuel afficher

function updateSlide(index) {
	carrouselImage.forEach((image, i) => {// boucle prenant images du tableau et les alts & chemin 

		image.src = `assets/images/slideshow/${slides[index].image}`;
		image.alt = `Banner Print-it${slides[index].image}`;
	});

	const tagLine = document.querySelector('#banner p');
	tagLine.innerHTML = slides[index].tagLine;//paragraphe remplacer contenu par rapport au slide

	// bouton selon l'image du slide selection la bonne classe quand l'image et appeller 
	const dots = document.querySelectorAll('#banner .dots .dot');
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		}
		else {
			dot.classList.remove('dot_selected');
		}
	}

	)
};
// selection fleche
const arrowLeft = document.querySelector('#banner .arrow_left');
const arrowRight = document.querySelector('#banner .arrow_right');

// click fleche gauche
arrowLeft.addEventListener('click', () => {
	console.log('clic sur la fleche de gauche');
	changeSlides('prev');
});

// click fleche droite
arrowRight.addEventListener('click', () => {
	changeSlides('next');
});
//changeSlides appel la fonction image avant ou après 

// boucle infini entre les images, reste % slides.length revient au début 
function changeSlides(direction) {
	if (direction === 'next') {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	} else if (direction === 'prev') {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	}
	updateSlide(currentSlideIndex);// maj contenur carrousel pour image correspondante
}

slides.forEach((slide, index) => {
	const dot = document.createElement('div'); //creation nouvel div pour chaque slide
	dot.classList.add('dot'); // ajout css au point img actuel

	if (index === 0) {
		dot.classList.add('dot_selected');//ajout css au point si index a 0  
	}

	dotsContainer.appendChild(dot);
});

//maj point selon fleche utilisé 
const dots = document.querySelectorAll('#banner .dots .dot');
dots.forEach((dot, index) => {

	dot.addEventListener('click', () => {

		currentSlideIndex = index;
		updateSlide(currentSlideIndex);
	});
});

//ajout perso effet au survol 
// dotsContainer problème quand je l'active 

const banner = document.getElementById('banner');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
//const dotsContainer = document.querySelector('dots');

banner.addEventListener('mouseover', () => {
	// La souris survole le conteneur d'images
	leftArrow.style.display = 'block';
	rightArrow.style.display = 'block';
	//dotsContainer.style.display = 'block';
});

banner.addEventListener('mouseout', () => {
	// La souris quitte le conteneur d'images
	leftArrow.style.display = 'none';
	rightArrow.style.display = 'none';
	//dotsContainer.style.display = 'none';
});