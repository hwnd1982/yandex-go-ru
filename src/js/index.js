import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.exclusive__gallery', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
  spaceBetween: 80 * innerWidth / 375,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 0,
      allowTouchMove: false,
    }
  },
  on: {
    resize: swiper => {
      switch(true) {
        case innerWidth >= 992:
          swiper.params.spaceBetween = 0
          swiper.slideTo(0, 0);
          break;
        default:
          swiper.params.spaceBetween = 80 * innerWidth / 375;
      }
      
      swiper.update();
    }
  }
});

