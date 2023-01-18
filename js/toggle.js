const toggle = document.getElementById("toggle");
const sections = document.getElementsByClassName("section");
const lights = document.getElementsByClassName("light");
const lightsSvg = document.getElementsByClassName("light-svg");
const setNav = document.getElementById("nav-overlay");
const shapes = document.getElementsByClassName("shape");

// logic to handle light/dark mode

toggleHandler = () => {
  if (toggle.checked === false) {
    sections[0].setAttribute("data-bg", "var(--seagreen)");
    sections[1].setAttribute("data-bg", "#f15f61");
    sections[2].setAttribute("data-bg", "#DDBCF7");
    sections[3].setAttribute("data-bg", "#fca971");
    shapes[0].style.backgroundColor = "var(--offWhite)";
    shapes[1].style.backgroundColor = "var(--pastelGreen)";
    shapes[2].style.backgroundColor = "var(--redClay)";
    shapes[3].style.backgroundColor = "var(--salmon)";
    shapes[4].style.backgroundColor = "var(--tan)";
    shapes[5].style.backgroundColor = "var(--airForceBlue)";
    shapes[6].style.backgroundColor = "var(--navy)";
    setNav.style.backgroundColor = "#23b296";
    localStorage.removeItem("darkTheme");
    console.log("darkTheme off");
  }
  if (toggle.checked === true) {
    sections[0].setAttribute("data-bg", "#0D0E2F");
    sections[1].setAttribute("data-bg", "#0D0E2F");
    sections[2].setAttribute("data-bg", "#0D0E2F");
    sections[3].setAttribute("data-bg", "#0D0E2F");
    shapes[0].style.backgroundColor = "#1e1c49";
    shapes[1].style.backgroundColor = "#535181";
    shapes[2].style.backgroundColor = "#3731AE";
    shapes[3].style.backgroundColor = "#25257C";
    shapes[4].style.backgroundColor = "#715E97";
    shapes[5].style.backgroundColor = "#535181";
    shapes[6].style.backgroundColor = "#252560";
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

// event listeners

document.addEventListener("DOMContentLoaded", themeHandler) 
toggle.addEventListener("click", toggleHandler);
