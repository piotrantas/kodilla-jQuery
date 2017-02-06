$(function(){
	var carouselList = $("#carousel .image");
	var interval = setInterval(changeSlide, 5000);

	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 200, moveFirstSlide);
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	
	$('#right-arrow').click(changeSlide);
	

	$('#left-arrow').click(function(){
		moveLastSlide();
		carouselList.animate({'marginLeft': 0}, 200);
	})

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	}


});