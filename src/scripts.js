
$(document).ready(function () {

    $(".icon.email").click(function () {
        $(".modal").slideDown(600);
        $(".modal").css("display","flex");
    });

    $(".close").click(function () {
        $(".modal").slideUp(600);
        $("form").get(0).reset();
    });

    $(".btn-submit").click(function(){
        $(".modal").hide(600);
        $("form").get(0).reset();
    })

})

