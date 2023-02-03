window.onload = () => {
	let cpt = 0;
	let left = document.querySelector('.left');
	let right = document.querySelector('.right');
	let contents = document.querySelector('.contents');
	let slider = document.querySelector('.slider');
  
	let sliders = Array.from(contents.children);
	let screenWidht = slider.getBoundingClientRect().width;
	right.addEventListener('click', avance);
	left.addEventListener('click', recule);
	setInterval(avance,4000);
  
	function avance() {
	  cpt++;
	  if (cpt === sliders.length - 1) {
		cpt = 0;
	  }
	  let decal = -screenWidht * cpt;
	  contents.style.transform = `translateX(${decal}px)`;
	}
  
	function recule() {
	  cpt--;
	  if (cpt < 0) {
		cpt = sliders.length - 1;
	  }
	  let decal = -screenWidht * cpt;
	  contents.style.transform = `translateX(${decal}px)`;
	}
  };