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
  ]
  
  const slider = () => {
	const banner = document.getElementById('banner');
	const dots = document.querySelector('.dots');

	const dot = `<span class="dot"></span>`;
	const arrow_left = `<div class="arrow arrow_left"><img src="./assets/images/arrow_left.png" alt=""></div>`;
	const arrow_right = `<div class="arrow arrow_right"><img src="./assets/images/arrow_right.png" alt=""></div>`;
  
	for (let i = 0; i < slides.length; i++) {
	  dots.innerHTML += dot;
	}
	banner.innerHTML += arrow_left;
	banner.innerHTML += arrow_right;
  
	const arrow__left = document.querySelector('.arrow_left');
	const arrow__right = document.querySelector('.arrow_right');
	const dot__list = document.querySelectorAll('.dot');
  
	const slide = (index) => {
		const img = document.querySelector('#banner img');
		const tagLine = document.querySelector('#banner p');
		img.src = `./assets/images/slideshow/${slides[index].image}`;
		img.alt = 'est ce que ca marche ?';
		tagLine.innerHTML = slides[index].tagLine;
		dot__list.forEach((dot) => {
		  dot.classList.remove('dot_selected');
		});
		dot__list[index].classList.add('dot_selected');
	  }
	  
	let img_index = 0;
	slide(img_index);
  
	arrow__left.addEventListener('click', () => {
	  img_index = (img_index - 1 + slides.length) % slides.length;
	  slide(img_index);
	});
  
	arrow__right.addEventListener('click', () => {
	  img_index = (img_index + 1) % slides.length;
	  slide(img_index);
	});
  }
  
  slider();
  