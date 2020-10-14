/*


Encapsulation: 

	-dropped into other projects,
	-wont mess with other stuff
	-you don't have to know how it works internally

Reusability:

	-genric so it can be used on future projects
	-use more than ponce on a page

Configuration:

	- API: have a set of options for the future developer to used





*/



let lightboxify = function(selector){

	var lightboxLinks = document.querySelectorAll(selector);

	let popUp = function(event) {
		console.log('meow', lightboxLinks[catImages])
		event.preventDefault()

		// background
		let boxOverlay = document.createElement('div')
		document.body.appendChild(boxOverlay)
		// boxOverlay.classList.add('lightbox-overlay')
		lightboxOverlay.style.position ='fixed'
		lightboxOverlay.style.top =0
		lightboxOverlay.style.left = 0
		lightboxOverlay.style.backgroundcolor = 'rgba(0, 0, 0, 0.75)'
		lightboxOverlay.style.width= '100vw'
		lightboxOverlay.style.height= '100vw'
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


}