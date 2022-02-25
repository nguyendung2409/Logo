const iconPlus = document.querySelector('.toggle-menu');
const menuChild = document.querySelector('.header-mobile .menu .menu-child');
const menu = document.querySelector('.header-mobile .menu');
const iconBars = document.querySelector('.menu-toggle');
const activeClass = 'is-show';
iconPlus.addEventListener('click', () => {
  menuChild.classList.toggle(activeClass);
});
iconBars.addEventListener('click', () => {
  menu.classList.add(activeClass);
});
document.addEventListener('click', (event) => {
  if (!iconBars.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove(activeClass);
  }
});

// Tab
const tabs = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');
function handleTabChange(e) {
  const tabId = e.target.dataset.tab;
  tabs.forEach((tab) => tab.classList.remove('active'));
  e.target.classList.add('active');
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('active');
    if (tabContent.dataset.tab === tabId) tabContent.classList.add('active');
  });
}
tabs.forEach((tab) => tab.addEventListener('click', handleTabChange));

// Slider

$(document).ready(function () {
  $('.slider-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $('.category-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $('.picture-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $('.news-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.tab-content').slick({
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
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

// Increase , decrease product quantity
const iconTimes = document.querySelector('.remove-cart');
const cartElement = document.querySelector('.cart-desc');
const productCount = document.querySelector('.product-count');
iconTimes?.addEventListener('click', () => {
  cartElement.textContent = 'Không có sản phẩm nào.';
  productCount.textContent = '0';
});

const increaseElement = document.querySelector('.increase');
const decreaseElement = document.querySelector('.decrease');
const productQuantity = document.querySelector('.product-quantity input');

increaseElement.addEventListener('click', () => {
  productQuantity.value++;
  productCount.textContent = productQuantity.value;
});
decreaseElement.addEventListener('click', () => {
  if (parseInt(productQuantity.value) === 0) return;
  productQuantity.value--;
  productCount.textContent = productQuantity.value;
});
