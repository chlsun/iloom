$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu-container').addClass('active');
    });
    $('.x').click(function(){
        $('.menu-container').removeClass('active');
    });

    $('.cont .point-out').mouseenter(function(){
        $(this).siblings('.information').css({
            opacity: 1,
            zIndex: 999
        });
    });
    $('.cont .point-out').mouseleave(function(){
        $(this).siblings('.information').css({
            opacity: 0,
            zIndex: -1
        });
    });

    $('.menu-bar .menu').click(function(){
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');

        const result = $(this).attr('data-tab');

        $('.sec-3 .tab').removeClass('active');
        $(`#${result}`).addClass('active');
    });

    $('.cont .heart .heart-logo').click(function(){
        $(this).toggleClass('active');
    });

    $('.footer-1 .menu .more').click(function(){
        $(this).parent('').siblings('ul').toggleClass('active');
        console.log('aaa');
    });

    $('.content .heart1').click(function(){
        $(this).toggleClass('active');
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // //슬라이더 보여줄 갯수를 지정해줌
        // spaceBetween: 30,
        // //슬라이더 하나 사이에 여백값을 설정해줌
        slidesPerGroup: 1,
        // // 넘어갈 슬라이드 갯수를 그룹으로 묶어 지정해줌
        loop: true, //슬라이드 반복여부
        speed: 2000, //넘어갈때 슬라이드의 duration 값
    
    
        autoplay: {
            //자동으로 넘어가는 슬라이드
            delay: 3500,
            disableOnInteraction: false
            //다른 인터렉션 진행시 자동 멈춤 해제
        },
    
        pagination: {
            el: ".swiper-pagination",
            //페이지네이션 사용시 버튼을 담을 클래스명 선택(동그란 버튼)
            clickable: true,
            //버튼의 클릭여부를 결정함
        },
    });
});