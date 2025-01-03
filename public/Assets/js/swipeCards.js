const cardsWrapper = document.querySelector('.cards-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const cardWidth = document.querySelector('.cards').offsetWidth + 40; // Includes margin
const totalCards = document.querySelectorAll('.cards').length;
const visibleCards = Math.floor(document.querySelector('.cards-comb').offsetWidth / cardWidth);

// Update the card slider position
function updateSlider() {
  const offset = currentIndex * cardWidth;
  cardsWrapper.style.transform = `translateX(-${offset}px)`;
}

// Disable buttons if at the start or end
function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalCards - visibleCards;
}

// Event listeners for navigation
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
    updateButtons();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSlider();
    updateButtons();
  }
});

// Handle window resize for responsiveness
window.addEventListener('resize', () => {
  const newVisibleCards = Math.floor(document.querySelector('.cards-comb').offsetWidth / cardWidth);
  currentIndex = Math.min(currentIndex, totalCards - newVisibleCards); // Adjust index if resized
  updateSlider();
  updateButtons();
});

// Initialize buttons on page load
updateButtons();
