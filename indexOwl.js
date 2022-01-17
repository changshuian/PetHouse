$($(".owl-carousel")[0]).owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    dots: false,
    nav: true, // 顯示點點
    responsive: {
        0: {
            items: 2 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
            items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1200: {
            items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

$($(".owl-carousel")[1]).owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    dots: false,
    nav: true, // 顯示點點
    responsive: {
        0: {
            items: 2 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
            items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1200: {
            items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

$($(".owl-carousel")[2]).owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    dots: false,
    nav: true, // 顯示點點
    responsive: {
        0: {
            items: 3 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
            items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1200: {
            items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});