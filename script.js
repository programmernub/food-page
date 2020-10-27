const btMenu = document.getElementById("bt-menu");
const promsImages = ["combo1.jpg", "combo2.jpg", "combo3.webp"];
const options = document.getElementById("menu-options");
btMenu.addEventListener('click', (e)=>{
	options.classList.toggle("hidden");
});
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
	