var NumDay = 0;

$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        onDragged: callbackImg
    });

    $('.owl-carousel').css('z-index', '0');
    $('.ham-icon').click(function () {

        if($('.dropdown').css('max-height')=="300px"){
            $('.owl-carousel').css('z-index', '0');
        }else
            $('.owl-carousel').css('z-index', '-1');
    
    });

    var events = [
        { 'Date': new Date(2022, 0, 12), 'Title': '' },
        { 'Date': new Date(2022, 0, 18), 'Title': '' },
        { 'Date': new Date(2022, 0, 1), 'Title': '' },

        { 'Date': new Date(2022, 1, 12), 'Title': '' },
        { 'Date': new Date(2022, 1, 18), 'Title': '' },
        { 'Date': new Date(2022, 1, 1), 'Title': '' },

        { 'Date': new Date(2022, 2, 12), 'Title': '' },
        { 'Date': new Date(2022, 2, 18), 'Title': '' },
        { 'Date': new Date(2022, 2, 1), 'Title': '' },

        { 'Date': new Date(2022, 3, 12), 'Title': '' },
        { 'Date': new Date(2022, 3, 18), 'Title': '' },
        { 'Date': new Date(2022, 3, 1), 'Title': '' },

        { 'Date': new Date(2022, 4, 12), 'Title': '' },
        { 'Date': new Date(2022, 4, 18), 'Title': '' },
        { 'Date': new Date(2022, 4, 1), 'Title': '' },
    ];
    var settings = {};
    var element = document.getElementById('PetGrooming_Right_Calendar');
    caleandar(element, events, settings);

    $('.owl-prev').click(function() {
        callbackImg();
    });
    $('.owl-next').click(function() {
        callbackImg();
    });

    $('.btn').click(function() {

        var state = true;

        if ($('#PetName').val() == "") {
            state = false;

            alert("請輸入寵物名稱");
        }

        if ($('#PetPhone').val() == "") {
            state = false;

            alert("請輸入連絡電話");
        }
        if (NumDay == 0) {
            state = false;

            alert("請選擇日期");
        }


        if (state == true)
            alert("預約成功!!");
    });
});

function callbackImg() {
    var ItemImg = $($('div.active')[2]).find('img').attr('src');
    $('.PetGrooming_Left_Top img').attr("src", ItemImg);
}