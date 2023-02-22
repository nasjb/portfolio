

$(document).ready(function () {


    $(".slide").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.slide-prev'), //이전 화살표
        nextArrow: $('.slide-next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });




});