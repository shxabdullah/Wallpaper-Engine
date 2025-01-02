const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function showSlide(newIndex) {
    if (newIndex < 0) {
        index = images.length - 1;
    } else if (newIndex >= images.length) {
        index = 0;
    } else {
        index = newIndex;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => showSlide(index + 1), 3000);