$(document).ready(function () {
    var height = (detectMobile() ? 60 : 0) + window.innerHeight,
        style = $("<style>"),
        css = ".viewport-height-page { height: " + height + "px }";
    style.html(css);
    $("head").append(style);
    $(".landing-next-button").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".story-page").offset().top
        }, 1200, 'easeInOutExpo');
    });
});

$(window).load(function () {
    var landingFlowers = $(".landing-flowers");
    landingFlowers.fadeIn(1000, 'easeInExpo', function() {
        landingFlowers.addClass('flex-display');
        landingFlowers.removeAttr('style');
        $(".landing-title").fadeIn(1000, 'easeInExpo');
        $(".landing-subtitle").fadeIn(2000, 'easeInExpo');
        $(".landing-next-button-container").fadeIn(3000, 'easeInExpo');
    });
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

function detectMobile() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
        return true;
    }
    else {
        return false;
    }
}