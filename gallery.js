function onGallery(element)
{
	if (document.body.offsetWidth > 576)
	{	
		let gallery = document.querySelector('.gallery');
		gallery.setAttribute('style', `display : block; height : 100%; top : ${window.scrollY}px`);
		document.body.setAttribute('style', 'overflow : hidden');
		
		let imgNum = element.target.previousElementSibling.id.split('-')[1];
		let img = document.querySelector('.gallery img');
		img.setAttribute('src', `./images-medium/IMG_${imgNum}.jpg`);
		img.setAttribute('id', `IMG-${imgNum}`);
	}
}

function offGallery()
{
	let gallery = document.querySelector('.gallery');
	gallery.setAttribute('style', 'display : none');
	document.body.setAttribute('style', 'overflow : auto');
}

function nextPhoto()
{
	let img = document.querySelector('.gallery img');
	let imgNum = img.id.split('-')[1];
	imgNum++;
	if (imgNum > 21)
	{
		imgNum = 1;
	}
	img.setAttribute('src', `./images-medium/IMG_${imgNum}.jpg`);
	img.setAttribute('id', `IMG-${imgNum}`);
}

function previousPhoto()
{
	let img = document.querySelector('.gallery img');
	let imgNum = img.id.split('-')[1];
	imgNum--;
	if (imgNum < 1)
	{
		imgNum = 21;
	}
	img.setAttribute('src', `./images-medium/IMG_${imgNum}.jpg`);
	img.setAttribute('id', `IMG-${imgNum}`);
}




document.addEventListener('DOMContentLoaded', function() {


	let photoCovers = document.querySelectorAll('.photoCover');
	for (element of photoCovers)
	{
		element.addEventListener('click', onGallery);
	}
	document.querySelector('.myModal').addEventListener('click', offGallery);
	
	window.onresize = function () {
		if (document.body.offsetWidth <= 576)
		{
			offGallery();
		}
	}
	
	document.querySelector('#next').addEventListener('click', nextPhoto);
	document.body.addEventListener('keyup', function(event){
		if (event.code === 'ArrowRight')
		{
			nextPhoto();
		}
	});
	
	document.querySelector('#previous').addEventListener('click', previousPhoto);
	document.body.addEventListener('keyup', function(event){
		if (event.code === 'ArrowLeft')
		{
			previousPhoto();
		}
	});
	
});
