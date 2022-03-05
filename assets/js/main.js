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

console.log(modalViews, modalBtns, modalCloses);

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

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
