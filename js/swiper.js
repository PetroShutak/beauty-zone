const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#custom-next-button',
    prevEl: '#custom-prev-button',
    clickable: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  //   clickable: true,
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById('custom-prev-button').addEventListener('click', () => {
  swiper.slidePrev();
});

document.getElementById('custom-next-button').addEventListener('click', () => {
  swiper.slideNext();
});
