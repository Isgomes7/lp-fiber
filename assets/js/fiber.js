jQuery(document).ready(function ($) {
    $(".menu-mobile").click(function () {
        $("header ul, .wrapper-buttons").toggleClass("active");
    })
});