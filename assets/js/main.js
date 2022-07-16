/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__toggle"),
  navClose = document.querySelector(".nav__close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
// when we click navigation link it removes menu from screen
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((n) => n.addEventListener("click", linkAction));
/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.querySelectorAll(".skills__content"),
  skillHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillContent.length; i++) {
    skillContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillHeader.forEach((el) => el.addEventListener("click", toggleSkills));

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".service__modal"),
  modalBtns = document.querySelectorAll(".service__btn"),
  modalCloses = document.querySelectorAll(".modal__close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    modal(i);
  })
);

modalCloses.forEach((close) => {
  close.addEventListener("click", () => {
    modalViews.forEach((view) => {
      view.classList.remove("active-modal");
    });
  });
});

// Removing modal even clicking outside of modal
const outsideModel = document.querySelectorAll(".service__modal");

outsideModel.forEach((el) => {
  el.addEventListener("click", () => {
    modalViews.forEach((view) => {
      view.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scrollTop");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeBtn = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previsouly selected choice (if user is selected )
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeBtn.classList[selectedTheme === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Activate/De theme manually
themeBtn.addEventListener("click", () => {
  //Add or remove dark theme / icon theme
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
