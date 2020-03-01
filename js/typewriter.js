var text = $('.typewriter').text();

var length = text.length;
var timeout;
var character = 0;


setTimeout(() => {
    $(document).ready(function () {
        $('.typewriter').text("");
        $('.typewriter').css('visibility', 'visible')
    });


    (function typeWriter() {

        timeout = setTimeout(function () {
            character++;
            var type = text.substring(0, character);
            $('.typewriter').text(type);
            typeWriter();



            // stop the animation
            if (length == character) {
                clearTimeout(timeout);
            }

        }, 25);

    }())


}, 3000);