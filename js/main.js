// burger menu js

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};


	button.addEventListener("click", hamburgerMenu, false);		
})();

// burger menu js ends



let greenButton = document.querySelector('#greenButton');
    let blackButton = document.querySelector('#blackButton');
    let pinkButton = document.querySelector('#pinkButton');
    let orangeButton = document.querySelector('#orangeButton');

	let closeButton = document.querySelector('#closeBtn');
    let closeButton2 = document.querySelector('#closeBtn2');
	let closeButton3 = document.querySelector('#closeBtn3');
    let closeButton4 = document.querySelector('#closeBtn4');


    greenButton.addEventListener('click', openOverlay);
    blackButton.addEventListener('click', openOverlay2);
	pinkButton.addEventListener('click', openOverlay3);
    orangeButton.addEventListener('click', openOverlay4);

    closeButton.addEventListener('click', closeOverlay);
    closeButton2.addEventListener('click', closeOverlay2);
	closeButton3.addEventListener('click', closeOverlay3);
    closeButton4.addEventListener('click', closeOverlay4);



    //open overlay

    function openOverlay(event) {
        document.getElementById("overlay").style.display = "block";
    }

    function openOverlay2(event) {
        document.getElementById("overlay2").style.display = "block";
    }

	function openOverlay3(event) {
        document.getElementById("overlay3").style.display = "block";
    }

	function openOverlay4(event) {
        document.getElementById("overlay4").style.display = "block";
    }



	//close overlay

    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }

    function closeOverlay2() {
        document.getElementById("overlay2").style.display = "none";
    }

	function closeOverlay3() {
        document.getElementById("overlay3").style.display = "none";
    }

    function closeOverlay4() {
        document.getElementById("overlay4").style.display = "none";
    }




    /* lightbox */

// const lightbox = document.createElement ('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image => {
// 	image.addEventListener('click' , e => {
// 		lightbox.classList.add('active')
// 		const img = document.createElement('img')
// 		img.src = image.src
// 	})
// })

