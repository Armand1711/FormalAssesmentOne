var gallerySlider = document.querySelector('.gallery-slider');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var slideWidth = gallerySlider.clientWidth;
var slideIndex = 0;

prevButton.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = gallerySlider.children.length - 1;
  }
  slideTo(slideIndex);
});

nextButton.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= gallerySlider.children.length) {
    slideIndex = 0;
  }
  slideTo(slideIndex);
});

function slideTo(index) {
  gallerySlider.style.transform = `translateX(-${slideWidth * index}px)`;
}

// Optional: Add autoplay functionality
var autoplayInterval = setInterval(function() {
  slideIndex++;
  if (slideIndex >= gallerySlider.children.length) {
    slideIndex = 0;
  }
  slideTo(slideIndex);
}, 3000);



var newsletterCheckbox = document.getElementById('newsletterCheckbox');


var signupForm = document.getElementById('signupForm');
var nameInput = document.getElementById('nameInput');
var surnameInput = document.getElementById('surnameInput');
var emailInput = document.getElementById('emailInput');
var numberInput = document.getElementById('numberInput');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  if (newsletterCheckbox.checked) {
    var name = nameInput.value;
    var surname = surnameInput.value;
    var email = emailInput.value;
    var number = numberInput.value;

    var message = "Welcome " + name + " " + surname + "! Thank you for your interest in Subject! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ".";
    alert(message);
  } else {
    var name = nameInput.value;
    var surname = surnameInput.value;

    var message = "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + " " + surname + "! If you want to sign up, you better CHECK that newsletter box!";
    alert(message);
  }
});
