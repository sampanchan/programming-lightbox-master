"use strict";

var lightboxLinks = document.querySelectorAll('.lightboxify');
//# sourceMappingURL=main.js.map
console.log ('hello')
// user clicks thumbnail image big image appears


//let imagestoKill = document.querySelectorAll('img.gif')
	// imagestoKill.forEach(function(img){
	// 	img.remove()


//user clicks thumbnil anchor element- big image  and close button appears
// gray background appears


// let thumbnailImage = document.querySelector('img')
// lightboxLinks[0].addEventListener('click', function(event)
let popUp = function(event) {
	console.log('meow', lightboxLinks[catImages])
	event.preventDefault()

	// background
	let boxOverlay = document.createElement('div')
	document.body.appendChild(boxOverlay)
	boxOverlay.classList.add('lightbox-overlay')

	//border
	let borderImage = document.createElement('div')
	document.body.appendChild(borderImage)
	borderImage.classList.add('lightbox')

	//image
	let popUpImage = document.createElement('img')
	popUpImage.setAttribute('src', this.href)
	borderImage.appendChild(popUpImage)

	//x button
	let byeByeButton = document.createElement('div')
	borderImage.appendChild(byeByeButton)
	byeByeButton.classList.add('lightbox-close')
	let ripGrumpy= function(){
		boxOverlay.remove()
		borderImage.remove()
	}

byeByeButton.addEventListener('click', ripGrumpy)
	


}

for (var catImages = 0; catImages < lightboxLinks.length; catImages++){
	lightboxLinks[catImages].addEventListener('click', popUp)
}