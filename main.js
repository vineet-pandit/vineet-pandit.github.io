$(document).ready(function () {
    $(".landing-next-button").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".story-page").offset().top
        });
    });
});

$(window).load(function () {

});
