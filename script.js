function debounce(func, wait) {
  let timeout;
  return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function handleScroll() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollY / maxScroll;
  
  // Brighter green gradient colors based on scroll percentage
  const color1 = `rgba(144, 238, 144, ${1 - scrollPercentage})`; // Light green (Pale Green)
  const color2 = `rgba(34, 139, 34, ${scrollPercentage})`; // Dark green (Forest Green)
  
  document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
}

window.addEventListener('scroll', debounce(handleScroll, 100));
handleScroll(); // Initial check
window.onload = function() {
  const typewriterText = document.querySelector('.typewriter-text');
  typewriterText.classList.add('typing-effect');
};
