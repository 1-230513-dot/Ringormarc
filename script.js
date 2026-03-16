// List your images here. 
// Make sure these files are in the same folder as your index.html
const images = [
    'unnamed.jpg', // Your castle image
    'marc.jpg',   // Add more image names here
    
];

let currentIndex = 0;

document.addEventListener('click', (e) => {
    // We don't want the background to change if you're clicking a button or link
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

    const hero = document.querySelector('.hero');
    
    // Move to the next image in the list
    currentIndex = (currentIndex + 1) % images.length;
    
    // Apply the new image with the dark gradient overlay
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${images[currentIndex]}')`;
});