const btMenu = document.getElementById("bt-menu");
const menuOptions = document.getElementsByClassName("option");
console.log(menuOptions);
const promsImages = ["combo1.jpg", "combo2.jpg", "combo3.webp"];
const options = document.getElementById("menu-options");
btMenu.addEventListener('click', (e)=>{
	options.classList.toggle("hidden");
});
for (let i = 0; i < menuOptions.length; i++) {
	menuOptions[i].addEventListener('click', ()=>{
	options.classList.toggle("hidden");
});
}



;let count = 0, divImage = document.getElementById("proms-image");
	setTimeout(() =>{
			divImage.attributes.src.value = "images/mainPage/" + promsImages[count];
			if (count === promsImages.length) {
				count = 0;
			}else{
				count++;
			}
			console.log(document.getElementById("proms-image").attributes.src.value);
		}, 5000);
		console.log(divImage);









const pizzasSection = document.getElementById("pizzas");
pizzasSection.addEventListener('click', (e)=>{
	const pizzas = document.getElementById("section-pizzas");
	pizzas.classList.toggle("hidden");
});

const beveragesSection = document.getElementById("beverages");
beveragesSection.addEventListener('click', (e)=>{
	const beverages = document.getElementById("section-beverages");
	beverages.classList.toggle("hidden");
});
const postresSection = document.getElementById("postres");
postresSection.addEventListener('click', (e)=>{
	const postres = document.getElementById("section-postres");
	postres.classList.toggle("hidden");
});
