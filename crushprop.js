const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');
const yaySound = document.getElementById('yay-sound'); // Ensure this ID matches your audio element

noButton.addEventListener('mouseover', () => {
    // Generate random positions within a certain range
    const randomX = Math.floor(Math.random() * 400) - 200; // Random X position
    const randomY = Math.floor(Math.random() * 400) - 200; // Random Y position
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.style.transition = "transform 0.1s ease-in-out"; // Faster movement
});

yesButton.addEventListener('click', () => {
    message.classList.remove('hidden'); // Show the message
    message.classList.add('show'); // Add the show class for the pop-up effect
    yaySound.currentTime = 0; // Reset sound to the start
    yaySound.play(); // Play the yay sound
    noButton.style.display = 'none'; // Hide the no button
});

noButton.addEventListener('click', () => {
    // Reset button position on click
    noButton.style.transform = 'translate(0, 0)';
});
