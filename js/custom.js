/** Scroll Reveal Effect **/
const sr = ScrollReveal({
  reset: false, //스크롤 시 한 번만 실행
});

sr.reveal('.landing-text-box', {
  duration: 1000,
  origin: 'right',
  distance: '80px',
});

sr.reveal('.meet-text-box', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
});

sr.reveal('.meet-wrapper img, .feature', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 200, // 0.2초 간격으로 차례대로 효과 나타남
});

/** Swiper Silder Effect **/
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}, 300);

/** Fit Insta Image Height **/
const instaImageHeight = document.querySelector('#h').scrollHeight;
document.querySelector('#fh').style.height = instaImageHeight + 'px';

window.addEventListener('resize', () => {
  const instaImageHeight = document.querySelector('#h').scrollHeight;
  document.querySelector('#fh').style.height = instaImageHeight + 'px';
});
