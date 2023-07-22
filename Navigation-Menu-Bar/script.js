const container = document.querySelector(`.nav`);

const menuContainer = document.querySelector(`.menu`);

const menuBtn = document.querySelector(`.menu-btn`);

//  function apply menu-icon
menuBtn.addEventListener(`click`, function () {
  container.classList.toggle(`nav-open`);
});
