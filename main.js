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
            // TODO: handle better
            console.log("Illegal response");
        }
        else {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbz6Q-mqV6Y2En60KJCUGXkzTTCu997uuRbN5KA4ksH2_8gMljQ/exec",
                crossDomain: true,
                data: {
                    "name": name,
                    "email": email,
                    "response": response,
                    "count": count
                },
                type: "POST",
                success: function (response) {
                    var res = JSON.parse(response)
                    if(res.success){
                        form.addClass("hide");
                        $(".response-successful").removeClass("hide");
                    }
                    else {
                        // TODO: handle better
                        console.log("error");
                    }
                },
                error: function (response) {
                    // TODO: handle better
                    console.log("error");
                }
            });
        }
    });
});