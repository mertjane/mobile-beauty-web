document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for your message!");
    form.reset();
  });

  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;
  const slideInterval = 4000; // 4 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Start the slider
  setInterval(nextSlide, slideInterval);

  // Initially show the first slide
  showSlide(currentSlide);
});
