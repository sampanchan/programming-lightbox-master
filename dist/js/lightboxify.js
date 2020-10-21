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



let lightboxify = function(selector, optionsObj ={}){

	if (!optionsObj.overlayOpacity){ 
		optionsObj.overlayOpacity =0.75
	}

	if (!optionsObj.hasOwnProperty('escapeClosesLightbox')) optionsObj.escapeClosesLightbox = true

	if (!optionsObj.backgroundColor){
		optionsObj.borderColor ='white'
	}

	if (!optionsObj.hasOwnProperty('blurryImage')) optionsObj.blurryImage = true

	console.log('options', optionsObj)

	var lightboxLinks = document.querySelectorAll(selector);

	let popUp = function(event) {
		console.log('meow', lightboxLinks[catImages])
		event.preventDefault()

		// background
		let boxOverlay = document.createElement('div')
		document.body.appendChild(boxOverlay)
		// boxOverlay.classList.add('lightbox-overlay')
		boxOverlay.style.position ='fixed'
		boxOverlay.style.top =0
		boxOverlay.style.left = 0
		boxOverlay.style.backgroundColor = 'rgba(0, 0, 0, ${optionsObj.overlayOpacity})'
		boxOverlay.style.width= '100vw'
		boxOverlay.style.height= '100vh'


		//border
		let borderImage = document.createElement('div')
		document.body.appendChild(borderImage)
		// borderImage.classList.add('lightbox')
		borderImage.style.position ='fixed'
		borderImage.style.top = '50%'
		borderImage.style.left = '50%'
		borderImage.style.mstransform = 'translate(-50%, -50%)' 
		borderImage.style.transform = 'translate(-50%, -50%)' 
		borderImage.style.backgroundColor = '${optionsObj.borderColor}'
		borderImage.style.padding = '30px'
		borderImage.style.borderradius = '5px' 


		//image
		let popUpImage = document.createElement('img')
		popUpImage.setAttribute('src', this.href)
		borderImage.appendChild(popUpImage)
		popUpImage.style.display = 'block'
		popUpImage.style.maxwidth = '90vw'
		popUpImage.style.maxheight = '80vh'
		// popUpImage.animate(
		// 	[{opacity:1, easing: 'ease-out'}, 
		// 	{opacity:0.1, easing: 'ease-in'},
		// 	{opacity:0}], 

		// 	2000) <---- works but will play later

		// let grumpyImages = document.querySelector('img')
		// grumpyImages.classList.add('main-images')
		if (optionsObj.blurryImage){
		popUpImage.addEventListener('mouseover', function (event) {
			popUpImage.target.cssfilter.blur = '7px'

		})
	}

		//x button
		let byeByeButton = document.createElement('div')
		borderImage.appendChild(byeByeButton)
		// byeByeButton.classList.add('lightbox-close')
		byeByeButton.style.position = 'absolute'
		byeByeButton.style.top = 0
		byeByeButton.style.right = 0
		byeByeButton.style.width = '48px'
		byeByeButton.style.height = '48px'
		byeByeButton.style.mstransform = 'translate(50%,-50%)'
		byeByeButton.style.transform = 'translate(-50%,-50%)'
		byeByeButton.style.border = 0
		byeByeButton.style.outline ='none'
		byeByeButton.style.background = 'none'
		byeByeButton.style.backgroundSize = 'contain'
		byeByeButton.style.backgroundImage = 'url(dist/img/close-button.png)'

		let ripGrumpy= function(){
			boxOverlay.remove()
			borderImage.remove()	
		}


		boxOverlay.addEventListener('click', ripGrumpy)
		byeByeButton.addEventListener('click', ripGrumpy)

		if(optionsObj.escapeClosesLightbox){
		document.addEventListener('keyup' , function(event){
			if (event.key === 'Escape'){
				ripGrumpy()
		}
	})

	}
}



	for (var catImages = 0; catImages < lightboxLinks.length; catImages++){
		lightboxLinks[catImages].addEventListener('click', popUp)
	}


}