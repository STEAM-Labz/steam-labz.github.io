// Set the countdown date to May 1, 2025
const countdownDate = new Date('May 1, 2025 00:00:00').getTime();

function updateCountdown() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countdownDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result with leading zeros
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        
        // Optionally redirect to the main site or show a launch message
        document.querySelector('.subtitle').innerHTML = "We're live! Redirecting you to our website...";
        setTimeout(() => {
            window.location.href = "https://btzzrcxa.manus.space";
        }, 3000);
    }
}

// Initialize form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const form = document.querySelector('.signup-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real implementation, you would send this to a server
            // For now, just show a thank you message
            this.innerHTML = `<p class="success-message">Thank you! We'll notify you at ${email} when we launch.</p>`;
        });
    }
    
    // Initialize animations for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
    });
});

// Update the countdown every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
