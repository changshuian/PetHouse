const small_picture = document.querySelectorAll('.small_picture img');
const picture = document.querySelector('.picture img');

function pic(s) {
    const arr = ["pic/detail/Carousel_1.jpg", "pic/detail/Carousel_2.jpg", "pic/detail/Carousel_3.jpg", "pic/detail/Carousel_4.jpg", "pic/detail/Carousel_5.jpg", "pic/detail/Carousel_6.jpg", "pic/detail/Carousel_7.jpg", "pic/detail/Carousel_8.jpg", "pic/detail/Carousel_9.jpg", "pic/detail/Carousel_10.jpg", "pic/detail/Carousel_11.jpg"]
    picture.setAttribute("src", arr[s]);

}

const shop_detail_describe_block = document.querySelectorAll('.shop_detail_describe_block');
const shop_detail_describe = document.querySelectorAll('.shop_detail_describe');
const describe_open = document.querySelectorAll(".shop_detail_describe .open");
const describe_close = document.querySelectorAll(".shop_detail_describe .close");

function block(s) {
    if (shop_detail_describe_block[s].style.maxHeight == "0px") {
        shop_detail_describe_block[s].style.maxHeight = "300px";
        setTimeout(function() {
            describe_open[s].style.display = "none";
            describe_close[s].style.display = "block";
        }, 300);
    } else {
        shop_detail_describe_block[s].style.maxHeight = "0px";
        setTimeout(function() {
            describe_open[s].style.display = "block";
            describe_close[s].style.display = "none";
        }, 300);
    }
}

$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    dots: false,
    nav: true, // 顯示點點
    responsive: {
        0: {
            items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        980: {
            items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

$('.owl-carousel').css('z-index', '0');
$('.ham-icon').click(function () {

    if($('.dropdown').css('max-height')=="300px"){
        $('.owl-carousel').css('z-index', '0');
    }else
        $('.owl-carousel').css('z-index', '-1');

});
