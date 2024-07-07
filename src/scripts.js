
$(document).ready(function () {

    $(".icon.email").click(function () {
        $(".modal").slideDown(600);
        $(".modal").css("display","flex");
    });

    $(".close").click(function () {
        $(".modal").slideUp(600);
    });


})

