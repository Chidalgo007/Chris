
$(document).ready(function () {

    $(".head-top").fadeIn(2000).css("display", "flex");

    $(".intro").fadeIn(2000).css("display", "block");
    $(".icon.email").click(function () {
        $(".modal").slideDown(600);
        $(".modal").css("display", "flex");
    });

    $(".close").click(function () {
        $(".modal").slideUp(600);
        $("form").get(0).reset();
    });

    $(".btn-submit").click(function () {
        $(".modal").hide();
        $(".success").slideDown(800).delay(1000).slideUp(800);
    })

});

