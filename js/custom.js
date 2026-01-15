/** Header Change Effect **/
const header = document.querySelector('#header');
const stickyHeader = () => {
  const scry = window.scrollY;
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', stickyHeader);

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

sr.reveal('.meet-wrapper img', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 200, // 0.2초 간격으로 차례대로 효과 나타남
});
