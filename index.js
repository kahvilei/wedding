document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.dialogue-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Show the corresponding dialogue content
            const content = button.nextElementSibling;
            const nextButton = content.nextElementSibling;

            //add in the text from the button as bold text in place of the button
            const text = button.textContent;
            const newText = document.createElement('b');
            newText.textContent = text;
            button.parentElement.replaceChild(newText, button);
            
            if (content && content.classList.contains('dialogue-content')) {
                content.style.display = 'block';
            }
            if (nextButton && nextButton.classList.contains('dialogue-button')) {
                nextButton.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = header.nextElementSibling;
            // add active class to the header
            header.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
});

let x;
let y;

let xspeed;
let yspeed;

let dvd;


let width = window.innerWidth;  
let height = window.innerWidth > 600 ? window.innerHeight : 300;

function preload() {
  dvd = loadImage("/pictures/1.webp");
}

function setup() {
  createCanvas(windowWidth, windowWidth > 600 ? windowHeight : 300);
  x = random(width);
  y = random(height);
  xspeed = width > 600 ? 2 : 1;
  yspeed = width > 600 ? 2 : 1;
}

let current_image = 0;
function pickImage() {

    current_image = (current_image + 1) % 13;
    dvd = loadImage(`/pictures/${current_image}.webp`);
}

function draw() {
  background(0);

  //set dvd witdth to be 180, height will be proportional
  dvd.resize(180, 0);

  image(dvd, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickImage();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickImage();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickImage();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickImage();

  }

  //set canvas size to window size, without recreating the canvas
  if(width != windowWidth || (height != windowHeight && windowWidth >= 600)){
    createCanvas(windowWidth, windowHeight);
    width = windowWidth;
    height = windowHeight;
  }

  if(width != windowWidth || (height != 300 && windowWidth < 600)){
    createCanvas(windowWidth, 300);
    width = windowWidth;
    height = 300;
  }
}