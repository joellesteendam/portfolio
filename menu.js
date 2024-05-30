let currentImageIndex = 0;

const images = [
    { src: "index/suriname.png", title: "Senior housing, Surinam", url: "surinam.html" },
    { src: "index/gent.png", title: "Corner house, Ghent", url: "ghent.html" },
    { src: "index/ijsland.png", title: "Primary school, Iceland", url: "iceland.html" },
    { src: "index/deurgreep.png", title: "Grotiushuis door handle", url: "doorhandle.html" },
    { src: "index/figures.png", title: "Staging reality", url: "figures.html" },
    { src:"index/edu.png", title: "Edubox, Jordan", url: "edubox.html" },
];

function showImage(index) {
    const imgElement = document.getElementById('project-image');

    imgElement.src = images[index].src;
    imgElement.nextElementSibling.innerText = images[index].title;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Increment index and wrap around
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Decrement index and wrap around
    showImage(currentImageIndex);
}

// Add event listener for scrolling
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {  // Scrolling down
        window.location.href = images[currentImageIndex].url; // Navigate to the URL of the current image
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentImageIndex);
});

// const menu = document.querySelector('#menu');
// const leftColumn = document.querySelector('.left-column');
// menu.addEventListener('click', function(event){
//     menu.classList.toggle('open');
//     leftColumn.classList.toggle('open');
//     document.body.classList.toggle('body-menu-open');
// });