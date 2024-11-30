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


// modal countdown
const modal = document.getElementById("adoption-campaign-modal");
    const closeModalBtn = document.querySelector(".close-btn");
    const countdownEl = document.getElementById("countdown");

    // modal show when page loads
    document.addEventListener("DOMContentLoaded", () => {
      modal.style.display = "flex"; 
      startCountdown(); // timer begin
    });

    // modal close when clicked on cross
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // modal close when clicked outside
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // timer math
    const targetDate = new Date("2024-12-25T00:00:00").getTime(); //ending date

    function startCountdown() {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
          clearInterval(timer);
          countdownEl.textContent = "Campaign Ended!";
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }, 1000);
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
