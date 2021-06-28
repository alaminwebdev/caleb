window.onload = (function () {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
});

//===============Ripple Effect===========
$(document).ready(function () {
	try {
		$('#banner2').ripples({
			resolution: 512,
			dropRadius: 10, //px
			perturbance: 0.01,
			interactive: true,
		});
	} catch (e) {
		$('.error').show().text(e);
	}

});


//===============Particles with move===========
document.addEventListener('DOMContentLoaded', function () {
	particleground(document.getElementById('particles'), {
		dotColor: '#777',
		lineColor: '#777',
		lineWidth: '0.2',
		dotWidth: '0.2',
		density: '22000',
		particleRadius: '10',
		directionX: 'center',
		directionY: 'down',
		proximity: 150,
		parallax: !0,
		parallaxMultiplier: 10,
	});

}, true);


// =================================wow =======================================

new WOW().init();




// =================================About-Image =======================================
$(document).ready(function () {
	$(".about-pic").hover3d({
		selector: ".project-card",
		shine: true,
	});

});

// =================================Counter-Up =======================================

$('.counter').counterUp({
	delay: 10,
	time: 5000
});




$(function () {
	"use strict";
	//=================navbar================
	$(".navbar-toggler").on('click', function () {
		$(".navbar-toggler-icon").toggleClass("active-icon")
	});

	$(document).ready(function () {
		$(".navbar-nav li a").on('click', function () {
			$(".navbar-collapse").collapse('hide');
			$(".navbar-toggler-icon").removeClass("active-icon")
		});
	});




	//================for sticky menu=================

	$(window).scroll(function () {


		var scrolling = $(this).scrollTop();

		if (scrolling > 400) {
			$(".header").addClass("header-bg");
			$(".back-to-top").fadeIn();
		} else {
			$(".header").removeClass("header-bg");
			$(".back-to-top").fadeOut();
		}

	});


	//================animation scroll js=====================
	var html_body = $('html, body');
	$('.nav-link , .navbar-brand , a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 60
				}, 1000, );
				return false;
			}
		}
	});

	//===========animated scroll top,preloader============

	var preloader = document.getElementById('preloader');
	setTimeout(function () {
		preloader.classList.add('pre');
		document.body.style.overflowY = "visible";
	}, 5000);

	//===========back to top===========

	$(".back-to-top").on('click', function () {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
	});


	//=================blog================
	$(".more").on('click', function () {
		$(".blog2").slideToggle();
		$(".down").toggleClass("arrow-rotate");
	});




})



//=============Team Slider==========

$('.slider-img').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	fade: false,
	centerMode: true,
	centerPadding: 0,
	asNavFor: '.slider-text',
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 1500,

});
$('.slider-text').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-img',
	fade: true,
	dots: false,
	arrows: false,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 1500,
	focusOnSelect: true,
});




// isotope===========


$(function () {
	"use strict";

	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows',
		getSortData: {
			name: '.name',
			symbol: '.symbol',
			number: '.number parseInt',
			category: '[data-category]',
			weight: function (itemElem) {
				var weight = $(itemElem).find('.weight').text();
				return parseFloat(weight.replace(/[\(\)]/g, ''));
			}
		}
	});

	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function () {
			var number = $(this).find('.number').text();
			return parseInt(number, 10) > 50;
		},
		// show if name ends with -ium
		ium: function () {
			var name = $(this).find('.name').text();
			return name.match(/ium$/);
		}
	};

	// bind filter button click
	$('#filters').on('click', '.portfolio-link', function () {
		var filterValue = $(this).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({
			filter: filterValue
		});
	});



	// change is-checked class on buttons
	$('.button-group').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', '.portfolio-link', function () {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});



});

$(function () {

	$(".resume-info").on('click', function () {
		$(".resume-details").slideToggle();
		$(".resume-details2").slideUp();

	});


	$(".resume-info2").on('click', function () {
		$(".resume-details2").slideToggle();
		$(".resume-details").slideUp();
	});


});
//=========================Testimonial-slider==================

$('.testimonial-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	vertical: true,
	asNavFor: '.testimonial-slider-right',
	autoplay: false,
	speed: 1000,
	autoplaySpeed: 1500,
	prevArrow: ".left",
	nextArrow: ".right",
	responsive: [
			{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true,
				asNavFor: '.testimonial-slider-right',
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: false,
				asNavFor: '',
			}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.testimonial-slider-right').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.testimonial-slider',
	fade: false,
	dots: false,
	arrows: true,
	autoplay: false,
	vertical: true,
	speed: 1000,
	autoplaySpeed: 1500,
	focusOnSelect: false,
	prevArrow: ".left",
	nextArrow: ".right",
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true,
				asNavFor: '.testimonial-slider',
			}
    },
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: false,
				asNavFor: '',
			}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//=======================Contact Form Validation=============

var fnam = document.getElementById("fname");
var fnm_errmsg = document.getElementById("fnm-err");

var lnam = document.getElementById("lname");
var lnm_errmsg = document.getElementById("lnm-err");

var email = document.getElementById("email");
var eml_errmsg = document.getElementById("eml-err");

var mesg = document.getElementById("mesg");
var msg_errmsg = document.getElementById("msg-err");



function sub(){
    if(fnam.value == ''){
        fnam.style.border = "1px solid red";
        fnm_errmsg.innerHTML = "please enter your first name";
        fnam.focus();
        return false;
    }
    if(lnam.value == ''){
        lnam.style.border = "1px solid red";
        lnm_errmsg.innerHTML = "please enter your Last name";
        lnam.focus();
        return false;
    }
    if(email.value == ''){
        email.style.border = "1px solid red";
        eml_errmsg.innerHTML = "please enter your Email";
        email.focus();
        return false;
    }
    
    if(mesg.value == ''){
        mesg.style.border = "1px solid red";
        msg_errmsg.innerHTML = "please type your message";
        mesg.focus();
        return false;
    }
}


function errvalid(){
    if(fnam.value != ''){
        fnam.style.border = "1px solid #f9ca24";
        fnm_errmsg.innerHTML = "";
    }
    if(lnam.value != ''){
        lnam.style.border = "1px solid #f9ca24";
        lnm_errmsg.innerHTML = "";
    }
    if(email.value != ''){
        email.style.border = "1px solid #f9ca24";
        eml_errmsg.innerHTML = "";
    }

    if(mesg.value != ''){
        mesg.style.border = "1px solid #f9ca24";
        msg_errmsg.innerHTML = "";
    }
}

fnam.addEventListener("blur", errvalid);
lnam.addEventListener("blur", errvalid);
email.addEventListener("blur", errvalid);
mesg.addEventListener("blur", errvalid);









