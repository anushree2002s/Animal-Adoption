// nav bar
const hamburger = document.querySelector(".hamburger-menu");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".side-menu .close-btn");

// Ensure elements exist before adding event listeners
if (hamburger && sideMenu && closeBtn) {
  // Open side menu
  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });

  // Close side menu
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // Close side menu when clicking outside
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
