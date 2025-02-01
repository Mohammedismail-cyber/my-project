// Simple form submission alert (replace with backend functionality as needed)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
// Simple animation for skill bars on load
window.addEventListener('load', () => {
    const skillBars = document.querySelectorAll('.skill-bar div');
    skillBars.forEach(bar => {
        bar.style.width = bar.style.width; // Trigger animation
    });
});