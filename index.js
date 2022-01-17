var state = true;
$('.ham-icon').click(function(e) {
    e.preventDefault();
    $('.dropdown').toggleClass('active');

    if (state == true) {
        $(this).find('i').removeClass('fas fa-bars');
        $(this).find('i').addClass('far fa-window-close');
        state = false;
    } else {
        $(this).find('i').addClass('fas fa-bars');
        $(this).find('i').removeClass('far fa-window-close');
        state = true;
    }
})

const Head_diV_box_fixed = document.querySelector(".Head_diV_box_fixed");
const Head_diV_box = document.querySelector(".Head_diV_box");
const dropdown = document.querySelector(".dropdown");
setInterval(function() {
    if (window.pageYOffset >= 200 || document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200) {
        Head_diV_box.style.transition = "all .3s ease";
        Head_diV_box.style.transform = "translateY(0%)";
    } else if (window.pageYOffset >= 90 || document.documentElement.scrollTop >= 90 || document.body.scrollTop >= 90) {
        Head_diV_box_fixed.style.position = "static";
        Head_diV_box.style.background = "#eeeeee";
        Head_diV_box.style.position = "fixed";
        Head_diV_box.style.transform = "translateY(-100%)";
    } else {
        Head_diV_box.style.transition = "all 0s ease";
        Head_diV_box.style.position = "static";
        Head_diV_box.style.background = "transparent";
        Head_diV_box_fixed.style.position = "absolute";
        Head_diV_box.style.transform = "translateY(0%)";
    }

}, 10);

$(".btn_goshop").click(function() {
    window.location = "commodity.html";

});