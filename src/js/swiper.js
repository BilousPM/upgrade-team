const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlide: true,
    effect: 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
     grabCursor: true,
    // Navigation arrows
    navigation: {
        enabled: false

    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
     },
    mousewheel: {
        invert: true,
        sensitivity: 1,
        eventsTarget: ".image-slider__slide",
        ReleaseOnEdges: true,
      },
       autoplay: {
        delay: 13000,
        stopOnLastSlide: false,
        disableOnInteraction: false
     } , 
       speed: 4500
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar'
    // } 
  });