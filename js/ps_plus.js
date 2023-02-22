$(function () {
  let carousel_1 = $("#carousel").waterwheelCarousel({
    flankingItems: 3, // 몇 개의 컨텐츠를 보여줄 건지 설정
    separation: 300, // 5개 컨텐츠의 사이 설정
    speed: 500, // 속도 설정
    opacityMultiplier: 0.5, // 양쪽 2개 opacity 값 설정
    sizeMultiplier: 0.7, // 양쪽 2개 컨텐츠의 크기 설정
    separationMultiplier: 2, //양쪽 2개 서로와의 사이 거리 설정
    // autoPlay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,

          swipe: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          swipe: true,
        },
      },
    ],
  });

  $(".prev-arrow").bind("click", function () {
    carousel_1.prev();
    return false;
  });
  $(".next-arrow").bind("click", function () {
    carousel_1.next();
    return false;
  });

  let carousel_2 = $("#carousel-2").waterwheelCarousel({
    flankingItems: 3, // 몇 개의 컨텐츠를 보여줄 건지 설정
    separation: 300, // 5개 컨텐츠의 사이 설정
    speed: 500, // 속도 설정
    opacityMultiplier: 0.5, // 양쪽 2개 opacity 값 설정
    sizeMultiplier: 0.7, // 양쪽 2개 컨텐츠의 크기 설정
    separationMultiplier: 2, //양쪽 2개 서로와의 사이 거리 설정
  });

  $(".prev-arrow-2").bind("click", function () {
    carousel_2.prev();
    return false;
  });
  $(".next-arrow-2").bind("click", function () {
    carousel_2.next();
    return false;
  });
});
