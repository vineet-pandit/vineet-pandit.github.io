$(document).ready(function () {
    $(".landing-next-button").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".story-page").offset().top
        }, 1200, 'easeInOutExpo');
        $('body').removeClass('no-scroll');
    });
});

$(window).load(function () {
    var landingFlowers = $(".landing-flowers");
    landingFlowers.fadeIn(1000);
    landingFlowers.addClass('flex-display');
    landingFlowers.removeAttr('style');
    $(".landing-title").fadeIn(2000, 'easeInExpo');
    $(".landing-subtitle").fadeIn(3000, 'easeInExpo');
    $(".landing-next-button-container").fadeIn(4000, 'easeInExpo');
});
