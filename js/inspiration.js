$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://api.adviceslip.com/advice",
        dataType: "json",
        success: function (data) {
            var advice = data.slip.advice;

            $("#quote").text(advice);
        },
        error: function () {
            console.log("Error occurred");
        }
    });

});