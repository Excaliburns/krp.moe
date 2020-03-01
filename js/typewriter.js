var text = $('.typewriter').text();

var length = text.length;
var character = 0;


setTimeout( () => {
    $( document ).ready( function () {
        $('.typewriter').text("");
        $('.typewriter').css('visibility', 'visible')
    });


    (function typeWriter() {

        setTimeout(function () {
            character++;
            var type = text.substring(0, character);
            $('.typewriter').text(type);
            typeWriter();
        }, 25);
    }())
}, 3000);