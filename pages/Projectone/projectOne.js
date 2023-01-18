const links = document.querySelectorAll(".list-el");
const container = document.querySelector(".nav-link-holder");
const cards = document.querySelectorAll(".card");
const navBar = document.querySelector(".side-nav");

setTimeout(function () {
  navBar.classList.add("show");
}, 400);

// setting active class on click

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  });
});

// IntersectionObserver

let options = {
  threshold: 0.7,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((el) => el.classList.remove("active"));
      const id = entry.target.getAttribute("data-name");
      const appendClass = document
        .querySelector(`li[id=${id}]`)
        .classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(callback, options);
cards.forEach((card) => observer.observe(card));

