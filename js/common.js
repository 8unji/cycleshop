$(document).ready(function () {
    $('.depth2').hide();
    $('.gnb > li').mouseenter(function () {
        $(this).children('.depth2').slideDown(300);
    });
    $('.gnb > li').mouseleave(function () {
        $(this).children('.depth2').slideUp(300);
    });


    // $('#header').hide();

    //풀페이지
    $('#fullpage').fullpage({
        slidenavigation: true,
        KeyboardScrolling: true,
        scrollingSpeed: 1000,
        scrollOverflow: true
    });
    //  슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 슬라이드를 버튼으로 움직일 수 있습니다.
        navigation: {
            nextEl: '.swiper-button-next'
        },
        speed: 500,
        loop: true,
    });
    // $(document).ready(function(){
    //     $(window).on("mousewheel",function(event,delta){
    //         if(delta>0){
    //             $('#header').show();
    //         }else if(delta<0){
    //             $('#header').hide();
    //         }
    //     });
    // });
    $(window).on('mousewheel', function (e) {
        var wheel = e.originalEvent.wheelDelta;

        //스크롤값을 가져온다.
        if (wheel > 0) {
            //스크롤 올릴때
            $("#header").show();
            $("#header").css({
                'background': 'rgba(255,255,255,0.1)'
            });
        } else {
            //스크롤 내릴때
            $("#header").hide();
        }
    });
});