$(function() {	
	$('#title-container').addClass("final");	
	setTimeout(function() { $('#section-about').addClass("final")}, 250);
});


$('#menu-toggle').click(function(){
	$('#sidebar-wrapper').addClass("active");
});

$("#menu-close").click(function(){
	$('#sidebar-wrapper').removeClass("active");
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

