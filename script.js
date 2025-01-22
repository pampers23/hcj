document.addEventListener('DOMContentLoaded', () => {
    let searchForm = document.querySelector('.search-form');

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
    };
});

document.addEventListener('DOMContentLoaded', () => {
    let shoppingCart = document.querySelector('.shopping-cart');

    document.querySelector('#cart-btn').onclick = () => {
        shoppingCart.classList.toggle('active');
    };
});


document.addEventListener('DOMContentLoaded', () => {
    let loginForm = document.querySelector('.login-form');

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
    };
});

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });