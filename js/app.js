const menu = document.querySelector('.header-bottom .menu');
const iconBars = document.querySelector('.menu-toggle');
const activeClass = 'is-show';
const iconPlusList = document.querySelectorAll('.toggle-menu');
iconBars.addEventListener('click', () => {
  menu.classList.toggle(activeClass);
  iconBars.classList.toggle(activeClass);
});
document.addEventListener('click', (event) => {
  if (!iconBars.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove(activeClass);
    iconBars.classList.remove(activeClass);
  }
});

[...iconPlusList].forEach((iconPlus) => {
  iconPlus?.addEventListener('click', (e) => {
    const menuChild = e.target.parentElement.nextElementSibling;
    iconPlus.classList.toggle(activeClass);
    menuChild.classList.toggle(activeClass);
  });
});
$(document).ready(function () {
  $('.banner-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.product-img-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa  fa-angle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  });

  $('.reviewer-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
// Handle back to top when user scrolls
const backToTopLink = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  if (scrollY > 200) {
    backToTopLink.classList.add(activeClass);
  } else {
    backToTopLink.classList.remove(activeClass);
  }
});
