$(function() {
	
	$('#title-container').addClass("final");
	alignCareersTitle();
	
	
});

$(window).resize(function() {
	alignCareersTitle();
});

function alignCareersTitle(){
	
	var height = $('#careers_img').css('height').split("px")[0];
	
	var top = (((height/2)*(-1))-40);
	console.log(top);
	
	$('#career_h2').css('top', top + "px");	
};

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});