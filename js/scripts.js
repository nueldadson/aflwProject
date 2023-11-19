$(document).ready(function () {
	$(".fa-times").hide();
	$(".fa-bars").on("click", function () {
		$(".fa-times").show();
		$(".fa-bars").hide();
	});
	$(".fa-times").on("click", function () {
		$(".fa-bars").show();
		$(".fa-times").hide();
	});

	// $('.welcomebtn').on("click", function () {
	// 	$('.opacityy').css({"opacity": "1"})
	// 	$('.welcome').hide();
	// });

	$(window).on("load scroll", function () {
		if ($(window).scrollTop() > 70) {
			$("#nav-bar").addClass("header-active");
		} else {
			$("#nav-bar").removeClass("header-active");
		}
	});
});

AOS.init({
	duration: 700,
	delay: 100,
});

// window.onscroll = function () {
// 	document.getElementById("my_audio").play();
// };
window.onscroll = function() {
	document.getElementById("foobar").play();
  }
var btt = document.getElementById("back-to-top"),
	body = document.body,
	docElem = document.documentElement,
	offset = 100,
	isFirefox = navigator.userAgent.toLowerCase().indexOf("Safari") > -1,
	scrollPos,
	docHeight;

// Calculate the document height
docHeight = Math.max(
	body.scrollHeight,
	body.offsetHeight,
	docElem.clientHeight,
	docElem.scrollHeight,
	docElem.offsetHeight,
);
if (docHeight != "undefined") {
	offset = docHeight / 12;
}

// Add scroll event listener
window.addEventListener("scroll", function (event) {
	scrollPos = body.scrollTop || docElem.scrollTop;

	btt.className = scrollPos > offset ? "visible" : "";
});

// Add click event listener
// btt.addEventListener("click", function (event) {
// 	event.preventDefault();

// 	if ($(window).scrollTop() > 70) {
// 		docElem.scrollTop = 0;
// 	} else {
// 		body.scrollTop = 0;
// 	}
// });

// var items = document.querySelectorAll("section");

// function isItemInView(item) {
// 	var rect = item.getBoundingClientRect();
// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <=
// 			(window.innerHeight || document.documentElement.clientHeight) &&
// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	);
// }

// function callbackFunc() {
// 	for (var i = 0; i < items.length; i++) {
// 		if (isItemInView(items[i])) {
// 			items[i].classList.add("visible");
// 		}
// 	}
// }

// listen for events
// window.addEventListener("load", callbackFunc);
// window.addEventListener("resize", callbackFunc);
// window.addEventListener("scroll", callbackFunc);

// window.addEventListener("scroll", play);

// function play() {
// setTimeout(function () {
// var audio = new Audio(
// 	"https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
// );
// audio.src = eeer.mp3;
// audio.play();
// }, 3000);
// }
