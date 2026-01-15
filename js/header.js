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

/** Menu Elements Clone For Mobile **/
const mobileMenus = document.querySelector('.mobile-menus');
const navs = document.querySelector('.nav-lists').cloneNode(true);
const info = document.querySelector('.info').cloneNode(true);

mobileMenus.appendChild(navs);
mobileMenus.appendChild(info);

/** Mobile Menu Toggle **/
const mobileBtn = document.querySelector('.mobile-btn');
const menuHeight = mobileMenus.scrollHeight;

console.log(navs);

toggleMobileBtn = (e) => {
  const target = e.currentTarget;
  target.classList.toggle('active');
  console.log(target);
  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    mobileMenus.style.height = menuHeight + 'px';
  } else {
    target.classList.add('not-active');
    mobileMenus.style.height = 0;
  }
};

mobileBtn.addEventListener('click', toggleMobileBtn);
