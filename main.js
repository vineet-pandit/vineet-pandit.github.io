$(document).ready(function () {
    $("#rsvpform").on("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var form = $(event.target),
            name = form.find(".rsvp-name").val(),
            email = form.find(".rsvp-email").val(),
            response = form.find(".rsvp-response").val(),
            count = form.find(".rsvp-count").val();
        if (email === "" || name === "" || count === null || response === null) {
            console.log("Illegal response");
        }
        else {
            $.ajax({
                url: "https://docs.google.com/forms/d/1DnOat5ILiLlh4RqjrMs1zXC_e6LZeL_kdIFtbDUs4Tk/formResponse",
                crossDomain: true,
                data: {
                    "entry.1995995669": name,
                    "entry.258603951": email,
                    "entry.1200986194": response,
                    "entry.813219062": count
                },
                type: "GET",
                success: function (response) {
                    form.addClass("hide");
                    $(".response-successful").removeClass("hide");
                },
                error: function (response) {
                    console.log("error");
                }
            });
        }
    });
});