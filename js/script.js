document.addEventListener("DOMContentLoaded", () => {
  // Toggle Icon Navbar
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  } else {
    console.warn("Menu icon or navbar not found.");
  }

  // Scroll Sections Active Links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  if (sections.length && navLinks.length) {
    window.onscroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (targetLink) {
              targetLink.classList.add("active");
            }
          });
        }
      });

      // Sticky Navbar
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 100);
      }

      // Remove toggle icon and navbar when clicking navbar link
      if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      }
    };
  } else {
    console.warn("Sections or nav links not found.");
  }

  // ScrollReveal
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });
    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
  } else {
    console.warn("ScrollReveal library not loaded.");
  }

  // Typed.js
  if (typeof Typed !== "undefined") {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "System Designer",
        "Web Scraper",
        "Data Scientist",
        "Python Developer",
        "Block-Chain Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  } else {
    console.warn("Typed.js library not loaded.");
  }

  // Custom Cursor
  const main = document.querySelector("body");
  const cursor = document.querySelector("#cursor");
  const images = document.querySelectorAll(".image");

  if (main && cursor && typeof gsap !== "undefined") {
    main.addEventListener("mousemove", (dets) => {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
      });
    });

    if (images.length) {
      images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          cursor.textContent = "View";
          gsap.to(cursor, {
            scale: 4,
            backgroundColor: "rgba(11, 247, 247, 0.54)",
          });
        });

        image.addEventListener("mouseleave", () => {
          cursor.textContent = "";
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "rgb(2, 236, 253)",
          });
        });
      });
    } else {
      console.warn("No images found for cursor interaction.");
    }
  } else {
    console.warn("Body, cursor, or GSAP not found.");
  }

  // Certificates Horizontal Scrolling
  const imageWrapper = document.querySelector(".image-wrapper");
  if (imageWrapper && typeof gsap !== "undefined") {
    const images = document.querySelectorAll(".image-wrapper img");
    if (images.length) {
      const totalImages = images.length / 2; // Account for duplicated images
      const imageWidth = images[0].offsetWidth + 30; // Image width + gap (from CSS)
      const totalWidth = totalImages * imageWidth; // Width of original set

      gsap.to(imageWrapper, {
        x: `-${totalWidth}px`,
        duration: 20, // Adjust for speed
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Seamless loop
        },
      });

      // Optional: Pause on hover
      imageWrapper.addEventListener("mouseenter", () => {
        gsap.to(imageWrapper, { timeScale: 0 });
      });

      imageWrapper.addEventListener("mouseleave", () => {
        gsap.to(imageWrapper, { timeScale: 1 });
      });
    } else {
      console.warn("No images found in image-wrapper.");
    }
  } else {
    console.warn("Image wrapper or GSAP not found.");
  }
});