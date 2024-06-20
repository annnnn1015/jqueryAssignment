$(document).ready(function () {
    $('.dropdown').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.dropdown-open').slideToggle();
    });

    var mySwiper = new Swiper('.swiper-container', {
        // 可選參數
        loop: true,
        effect: 'page',
        autoplay: true,
        delay: 5000,

        // 如果需要分頁設置
        pagination: {
            el: '.swiper-pagination',
        },

        // 上一個/下一個 按鈕
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'positionFromTop': 1000,
    });

    $('.top_bottom').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
});