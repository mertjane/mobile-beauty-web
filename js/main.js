// Function to open the modal
function openModal() {
  document.getElementById("searchModal").style.display = "flex"; // Set display to flex to show the modal
}

// Function to close the modal
function closeModal() {
  document.getElementById("searchModal").style.display = "none"; // Set display to none to hide the modal
}

// Header Carousel
function carousel() {
  return {
    activeSlide: 0,
    slides: [0, 1, 2],
    next() {
      this.activeSlide =
        this.activeSlide === this.slides.length - 1 ? 0 : this.activeSlide + 1;
    },
    prev() {
      this.activeSlide =
        this.activeSlide === 0 ? this.slides.length - 1 : this.activeSlide - 1;
    },
    autoplay: null,
    init() {
      this.autoplay = setInterval(() => {
        this.next();
      }, 5000);
    },
    stop() {
      clearInterval(this.autoplay);
    },
    start() {
      this.autoplay = setInterval(() => {
        this.next();
      }, 5000);
    },
  };
}

// About-us Open Modal
function openModal() {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/DWRcNpR6Kdc";
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.classList.add("hidden");
}
