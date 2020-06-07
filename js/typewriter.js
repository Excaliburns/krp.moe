var typeWriterText;
var length;
var timeOut;
var char = 1;


$(document).ready(function () {
    if (localStorage.getItem('hasRunTutIntro') == null) {   
    $('.header-slideIn').addClass('slideIn-anim');
    
    typeWriterText = $('.typewriter').text();
    length = typeWriterText.length;
    $('.typewriter').text(""); 

    
    setTimeout( function() {
        typeWriter();
    }, 1750);


    localStorage.setItem('hasRunTutIntro', true);
    }
    else {
        $('.header-slideIn').addClass('finished-slideIn-anim');
        $('.fadein').addClass('finished-fadein-anim');
    }


});

function unhideDefaults() {
    $('.fadein').addClass('fadein-anim');
}



function typeWriter() {
    timeOut = setTimeout(function() {
        var tempText = typeWriterText.substring(0, char);
        $('.typewriter').text(tempText);
        typeWriter();


        if (length == char) {
            clearTimeout(timeOut);

            unhideDefaults();
        }

        char++;
    }, 35)
}