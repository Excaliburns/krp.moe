$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $("section")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i] 
    
        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("fadeInSection")
        } else {
            $(tag).removeClass("fadeInSection")
        }
    }
});