// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'System Designer', 'Data Scientist','Python Developer','Block-Chain Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });


var main = document.querySelector("body"); 
var cursor = document.querySelector("#cursor");
var images = document.querySelectorAll(".image");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
    });
});

images.forEach(image => {
    image.addEventListener("mouseenter", function () {
        cursor.textContent = "View";
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: "rgba(11, 247, 247, 0.54)",
        });
    });

    image.addEventListener("mouseleave", function () {
        cursor.textContent = "";
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "rgb(2, 236, 253)",
        });
    });
});
gsap.to(".image-wrapper", {
  x: "-50%",
  duration: 10,
  ease: "none",
  repeat: -1
});
