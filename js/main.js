$(function() {
    // $('.intro').click(function () {
    //     document.location.href = "https://www.naver.com";
    // });

    // Loading Intro
    const sample = $("#introVideo").get(0);
    sample.load();
    sample.play();

    // $('.intro').off('scroll touchmove mousewheel');
    $(".intro").on("scroll touchmove mousewheel", function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $(".intro")
        .delay(8000)
        .fadeOut(3000, function() {
            sample.pause();
        });

    function reloadEvent() {
        const pageReload = window.performance
            .getEntriesByType("navigation")
            .map((nav) => nav.type)
            .includes("reload");

        if (pageReload == true) {
            $(".intro").css("display", "none");
            sample.pause();
        } else {}
    }
    reloadEvent();
    // Loading Intro End

    // main

    // 이달의소식 배너 슬라이드
    $(".news_banner_slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,

        speed: 1000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // 신작게임 배너 슬라이드

    $(".rel_banner_slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,

        speed: 1000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // 신작게임 목록 슬라이드

    $(".rel_game_list").slick({
        arrows: true,
        prevArrow: $(".product_pre"),
        nextArrow: $(".product_next"),
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "60px",
        slidesToShow: 7,
        variableWidth: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "2px",
                slidesToShow: 2,
            },
        }, ],
    });

    // 제품소개

    $(".product_list img").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        let clickTab = $(this).attr("data-tab");
        $(".tab-box").removeClass("active");
        $("." + clickTab).addClass("active");
    });

    // 헤더
    $(".header .fa-search").click(function() {
        $(".pop_search").fadeToggle();
    });
    $(".pop_search .fa-times-circle").click(function() {
        $(".pop_search").fadeOut();
    });

    $(".menu_icon .align_justify").click(function() {
        $(".header, header .global_nav_bar li a, .align_justify").toggleClass(
            "active"
        );
    });

    // 모바일메뉴
    $(".mobile_global_nav_bar li").click(function() {
        $(this).siblings().children(".main-menu").removeClass("active");
        $(this).children(".main-menu").toggleClass("active");

        $(".mobile_sub-menu").stop().slideUp();
        $(this).children(".mobile_sub-menu").stop().slideToggle();
    });
});