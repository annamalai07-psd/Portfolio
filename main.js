const roles = [
    "Computer Science Engineer _",
    "Web Designer _",
    "Graphic Designer _"
];

let index = 0;
const typingDiv = document.getElementById('typing');

function showNextRole() {
  typingDiv.style.animation = 'none'; // Reset animation
  void typingDiv.offsetWidth; // Trigger reflow to restart animation
  typingDiv.textContent = roles[index];
  typingDiv.style.animation = 'typing 2s steps(30, end) forwards, blink 0.5s step-end infinite';
  index = (index + 1) % roles.length;
}

showNextRole(); // Show the first role
setInterval(showNextRole, 4000); // Switch role every 4 seconds


/*-------------------------------------- contact form -----------------------------------------*/ 

