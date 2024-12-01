/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('art-canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }
    let ctx = canvas.getContext('2d');

    // Function to draw a circle
    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // Function to draw a line
    function drawLine(x1, y1, x2, y2, color, width) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }

    // Draw a dynamic geometric pattern
    function drawGeometricArt() {
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let totalShapes = 50;
        let maxRadius = 250;

        for (let i = 0; i < totalShapes; i++) {
            let angle = i * Math.PI / 15; // Angle between each shape
            let radius = i * (maxRadius / totalShapes); // Increase radius for each shape
            let x = centerX + radius * Math.cos(angle);
            let y = centerY + radius * Math.sin(angle);

            // Choose random colors
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let color = `rgb(${r}, ${g}, ${b})`;

            // Draw a circle at the computed position
            drawCircle(x, y, 20, color);
        }
    }

    // Call the function to draw the geometric art
    drawGeometricArt();
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
