$(document).ready(function () {
    $(".landing-next-button").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".story-page").offset().top
        }, 1200, 'easeInOutExpo');
    });
});

$(window).load(function () {
    setTimeout (function () {
        scrollTo(0,0);
    }, 100);
    var landingFlowers = $(".landing-flowers");
    landingFlowers.fadeIn(1000, 'easeInExpo', function() {
        landingFlowers.addClass('flex-display');
        landingFlowers.removeAttr('style');
        $(".landing-title").fadeIn(1000, 'easeInExpo');
        $(".landing-subtitle").fadeIn(2000, 'easeInExpo');
        $(".landing-next-button-container").fadeIn(3000, 'easeInExpo');
    });
});
