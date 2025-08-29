/*--------------------------------------------------------------------------*
 *
 *  swiper indexVisual
 *
 *--------------------------------------------------------------------------*/

;(function ($) {
  if ($("#visual01 .swiper-container").length) {
    var swiper = new Swiper('#visual01 .swiper-container', {
      autoplay: {
        delay: 6000,
      },
      effect: 'fade',
      allowTouchMove: false,
      autoplayDisableOnInteraction: false,
      speed: 0,
      fade: {
        crossFade: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    })
    swiper.autoplay.stop()
    $(window).load(function () {
      setTimeout(function () {
        swiper.autoplay.start()
      }, 1500)
    })
    $(function () {
      setTimeout('stopload()', 10000)
    })
    function stopload() {
      setTimeout(function () {
        swiper.autoplay.start()
      }, 1500)
    }
  }
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  tradeTableButtonWrap
 *
 *--------------------------------------------------------------------------*/

var swiper_swiperCard_thumb = new Swiper('.tradeTableButtonWrap', {
  slidesPerView: 2,
  spaceBetween: 6,
  effect: 'slide',
  speed: 300,
  resizeReInit: true,
  allowTouchMove: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  freemode: {
    enabled: true,
  },
})

swiper_swiperCard = new Swiper('.tradeTableSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  effect: 'slide',
  speed: 300,
  resizeReInit: true,
  allowTouchMove: true,
  threshold: 10,
  thumbs: {
    swiper: swiper_swiperCard_thumb,
  },
  breakpoints: {
    599: {
      slidesPerView: 'auto',
      allowTouchMove: true,
    },
  },
})
/*--------------------------------------------------------------------------*
 *
 *  serviceSwiper
 *
 *--------------------------------------------------------------------------*/
var swiper1 = new Swiper('.serviceSwiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4200,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  },
})
/*--------------------------------------------------------------------------*
 *
 *  paySwiper
 *
 *--------------------------------------------------------------------------*/
var swiper2 = new Swiper('.paySwiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4200,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  },
})
