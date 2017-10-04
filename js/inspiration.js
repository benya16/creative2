$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://api.adviceslip.com/advice",
        dataType: "json",
        success: function (data) {
            console.log(data.slip.advice);
        },
        error: function () {
            console.log("Error occurred");
        }
    });

});