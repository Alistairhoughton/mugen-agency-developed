const toggle = document.getElementById("toggle");
const sections = document.getElementsByClassName("section");
const lights = document.getElementsByClassName("light");
const lightsSvg = document.getElementsByClassName("light-svg");
const setNav = document.getElementById("nav-overlay");
const shapes = document.getElementsByClassName("shape");
const toggleDecorations = document.getElementsByClassName("light-bg")

// logic to handle light/dark mode

toggleHandler = () => {
  if (toggle.checked === false) {
    sections[0].setAttribute("data-bg", "var(--seagreen)");
    sections[1].setAttribute("data-bg", "#f15f61");
    sections[2].setAttribute("data-bg", "#DDBCF7");
    sections[3].setAttribute("data-bg", "#fca971");
    sections[4].setAttribute("data-bg", "#f15f61");
    sections[5].setAttribute("data-bg", "#DDBCF7");
    sections[6].setAttribute("data-bg", "#fca971");
    setNav.style.backgroundColor = "var(--seagreen)";
    localStorage.removeItem("darkTheme");
    console.log("darkTheme off");
  }
  if (toggle.checked === true) {
    sections[0].setAttribute("data-bg", "#0D0E2F");
    sections[1].setAttribute("data-bg", "#0D0E2F");
    sections[2].setAttribute("data-bg", "#0D0E2F");
    sections[3].setAttribute("data-bg", "#0D0E2F");
    sections[4].setAttribute("data-bg", "#0D0E2F");
    sections[5].setAttribute("data-bg", "#0D0E2F");
    sections[6].setAttribute("data-bg", "#0D0E2F");
    setNav.style.backgroundColor = "#0D0E2F";
    localStorage.setItem("darkTheme", "enabled");
    console.log("darkTheme on");
  }

  onScroll();

  [...lights].forEach((el) => {
    el.classList.toggle("dark");
  });

  [...lightsSvg].forEach((el) => {
    el.classList.toggle("dark-svg");
  });

  [...toggleDecorations].forEach((el) => {
    el.classList.toggle("dark-bg");
  });
};

// logic to check which theme to use since it was set

themeHandler = () => {
  const darkTheme = localStorage.getItem("darkTheme");

  if (!darkTheme) {
    console.log("darkTheme off");
    toggle.checked = false;
  } else {
    console.log("darkTheme on");
    toggle.checked = true;
    toggleHandler();
  }
};

window.onload = function () {
  themeHandler;
};

// event listeners

document.addEventListener("DOMContentLoaded", themeHandler);
toggle.addEventListener("click", toggleHandler);
