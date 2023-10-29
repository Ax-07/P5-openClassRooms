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
	}
];

const slider = () => {

	//remets les dots dynamiquements

	const arrow__left = document.querySelector('.arrow_left');
	const arrow__right = document.querySelector('.arrow_right');
	const dot__list = document.querySelectorAll('.dot');
	const img = document.querySelector('#banner img');
	const tagLine = document.querySelector('#banner p');

	let img_index = 0;
	let prev_index = slides.length - 1;
	let next_index = img_index + 1;
	dot__list[img_index].classList.add('dot_selected');

	function getImage() {
		return './assets/images/slideshow/' + slides[img_index].image;
	}

	function getTagLine() {
		return slides[img_index].tagLine;
	}

	function slide() {
		prev_index = img_index === 0 ? slides.length - 1 : img_index - 1;
		next_index = img_index === slides.length - 1 ? 0 : img_index + 1;

		img.src = getImage();
		tagLine.innerHTML = getTagLine();

		dot__list[prev_index].classList.remove('dot_selected');
		dot__list[img_index].classList.add('dot_selected');
		dot__list[next_index].classList.remove('dot_selected');

		console.log(img_index);
	};

	arrow__left.addEventListener('click', () => {
		img_index = prev_index;
		slide(img_index);
	});

	arrow__right.addEventListener('click', () => {
		img_index = next_index;
		slide(img_index);
	});
};

slider();
