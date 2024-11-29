// nav bar
const hamburger = document.querySelector(".hamburger-menu");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".side-menu .close-btn");

if (hamburger && sideMenu && closeBtn) {
  // open side menu
  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });

  // close side menu
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // close side menu when clicking outside
  window.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
      sideMenu.classList.remove("active");
    }
  });
}


// // swiper
// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween: 20,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//       },
//       576: {
//         slidesPerView: 2,
//       },
//       0: {
//         slidesPerView: 1,
//       },
//     },
//   });
