window.addEventListener("load", function () {
  const menuIcon = document.querySelector(".MenuIcon");
  const menuSection = document.querySelector(".Menu");
  const menuContent = document.querySelector(".menu-content");
  const navLinks = document.querySelectorAll(".menu-nav a");
  console.log(navLinks);
  //toggle sidebar menu
  menuIcon.addEventListener("click", toggleMenu);
  function toggleMenu() {
    menuIcon.classList.toggle("change");
    if (menuSection.classList.contains("menu-section-show")) {
      menuContent.style.opacity = 0;
      setTimeout(() => {
        menuSection.classList.remove("menu-section-show");
        menuSection.style.transition = ".5s";
      }, 200);
    } else {
      menuSection.classList.add("menu-section-show");
      menuSection.style.transition = ".5s";
      setTimeout(() => {
        menuContent.style.opacity = 1;
      }, 550);
    }
  }
  //hide sidebar menu when click to nav menu
  function hideSidebar() {
    menuContent.style.opacity = 0;
    setTimeout(() => {
      menuSection.classList.remove("menu-section-show");
      menuSection.style.transition = ".5s";
      menuIcon.classList.remove("change");
    }, 200);
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", hideSidebar);
  }
});
