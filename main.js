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
    landingFlowers.removeAttr('style');
    landingFlowers.css("display", 'flex');
    landingFlowers.css("display", '-webkit-flex');
    $(".landing-title").fadeIn(2000, 'easeInExpo');
    $(".landing-subtitle").fadeIn(3000, 'easeInExpo');
    $(".landing-next-button-container").fadeIn(4000, 'easeInExpo');
});
