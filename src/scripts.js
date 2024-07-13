
$(document).ready(function () {

    $(".head-top").fadeIn(2000).css("display", "flex");

    $(".intro").fadeIn(2000).css("display", "block");

    var modal = $(".modal");
    var success = $(".success");

    function centerElement(el){
        var windowWidth = $(window).width();
        var elementWidth = el.outerWidth();

        el.css({
            'display':'flex',
            'left':(windowWidth - elementWidth)/2+'px'
        });
    }

    $(".icon.email").click(function () {
        centerElement(modal);
        modal.slideDown(600);
       // modal.css("display", "flex");
    });

    $(".close").click(function () {
        modal.slideUp(600);
        $("form").get(0).reset();
    });

    $("form").submit(function () {

        modal.hide();
        centerElement(success);
        success.slideDown(800).delay(1000).slideUp(800);
        this.reset;
    });

    function isVisible(el) {
        var visible = el.getBoundingClientRect();
        return (
            visible.top >= 0 && visible.left >= 0 &&
            visible.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            visible.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkIsVisible() {
        $('.img').each(function () {
            if (isVisible(this)) {
                $(this).addClass('visible');
            }
        });
    }
    checkIsVisible();
    $(window).on('scroll resize', checkIsVisible);

});
