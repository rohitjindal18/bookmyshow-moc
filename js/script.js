function loaded() {
	setInterval("changeCarousel()" , 3000);
}
var imageCount = 1;
function changeCarousel(){
	var imagesArray = ["./Images/carousel1.jpg","./Images/carousel2.jpg","./Images/carousel3.jpg","./Images/carousel4.jpg"];
	document.getElementById('carouselimg').src = imagesArray[imageCount];
	imageCount = (imageCount + 1)%4;
}