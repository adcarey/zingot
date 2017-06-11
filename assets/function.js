var images = ["<img class='center-block phot0' src='jewelry/image1.jpg' height='350px' width='350px'>", "<img class='center-block phot0' src='jewelry/image2.jpg'>", "<img class='center-block phot0' src='jewelry/image3.jpg'>", "<img class='center-block phot0' src='jewelry/image4.jpg'>",
"<img class='center-block phot0' src='jewelry/image5.jpg'>", "<img class='center-block phot0' src='jewelry/image6.jpg'>", "<img class='center-block phot0' src='jewelry/image7.jpg'>", "<img class='center-block phot0' src='jewelry/image8.jpg'>",
"<img class='center-block phot0' src='jewelry/image9.jpg'>", "<img class='center-block phot0' src='jewelry/image10.jpg'>", "<img class='center-block phot0' src='jewelry/image11.jpg'>","<img class='center-block phot0' src='jewelry/image12.jpg'>",
"<img class='center-block phot0' src='jewelry/image13.jpg'>", "<img class='center-block phot0' src='jewelry/image14.jpg'>", "<img class='center-block phot0' src='jewelry/image15.jpg'>"]
var start  = images[2]
var next = images++
var imageCount = 0;
var show;
var timer = 5;
var runDown;

function slideShow(){
	$(".border").html(images[0]);

}

function slide(){
	show = 0;
}

function nextSlide(){
	show = timer + images[imageCount]
	$(".images").html(show);
	setTimeout(wait, 5000)
}
function countDown(){
	rundDown = setInterval(fiveSeconds, 1000);
	function fiveSeconds(){
		if (timer === 0) {
			clearInterval(runDown);
			nextSlide();
		}
		if (timer > 0) {
			timer--;
		}
	}
}
function wait() {
	if (imageCount < 15){
		imageCount++;
		nextSlide();
		timer = 5;
		countDown;
	}
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

