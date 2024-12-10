const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelector('.dropdown-btn').addEventListener('click', function () {
  const dropdown = this.parentElement;
  dropdown.classList.toggle('show');
});

// Close the dropdown if clicked outside
window.addEventListener('click', function (e) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function slideToNext() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Change slides every 3 seconds
setInterval(slideToNext, 3000);



// Define the target date for the countdown
const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    // Calculate remaining time in days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  } else {
    // Stop the countdown and display a message
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "Flash Sale Ended!";
  }
}

// Run the countdown
const timer = setInterval(updateCountdown, 1000); // Update every second
updateCountdown(); // Initial call to avoid 1s delay

// Get the products container and navigation buttons
const productsContainer = document.querySelector('.products');
const prevButton = document.getElementById('scrollPrev');
const nextButton = document.getElementById('scrollNext');

// Scroll to the left
prevButton.addEventListener('click', () => {
  productsContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

// Scroll to the right
nextButton.addEventListener('click', () => {
  productsContainer.scrollBy({ left: 300, behavior: 'smooth' });
});
