$(function() {
	
	$('#title-container').addClass("final");
	
	setTimeout(function() { $('#section-about').addClass("final")}, 250);
});




$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});