// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const openFormBtn = document.getElementById('openFormBtn');
  const closeFormBtn = document.getElementById('closeFormBtn');
  const popupForm = document.getElementById('popupForm');
  const projectForm = document.getElementById('projectForm');
  const toastMessage = document.getElementById('toastMessage');

  // Initially hide the form
  popupForm.style.display = 'none';

  openFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'flex';
  });

  closeFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
  });

  projectForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate form submission (replace with actual AJAX call if needed)
    if (validateForm()) {
      submitForm();
      clearForm();
      showToastMessage();
      popupForm.style.display = 'none'; // Close the form after submission

      // Add animation class to the toast message for animation
      toastMessage.classList.add('animate-toast');
      setTimeout(function() {
        toastMessage.classList.remove('animate-toast');
      }, 3000); // Remove animation class after 3 seconds
    }
  });

  function validateForm() {
    // Basic validation example, you can expand this as needed
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const projectType = document.getElementById('projectType').value;
    const projectCategory = document.getElementById('projectCategory').value;
    const projectDescription = document.getElementById('projectDescription').value.trim();

    if (name === '' || email === '' || contactNumber === '' || projectType === '' || projectCategory === '' || projectDescription === '') {
      alert('Please fill in all fields.');
      return false;
    }

    // Example email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Example phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    return true;
  }

  function submitForm() {
    // Example function for form submission (you can replace with actual submission logic)
    // Simulated submission, replace with actual code
    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      contactNumber: document.getElementById('contactNumber').value.trim(),
      projectType: document.getElementById('projectType').value,
      projectCategory: document.getElementById('projectCategory').value,
      projectDescription: document.getElementById('projectDescription').value.trim()
    };

    console.log('Form data:', formData);
    // Perform actual form submission here (e.g., AJAX request)
    // Replace the console.log with your submission logic
  }

  function clearForm() {
    // Clear all form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contactNumber').value = '';
    document.getElementById('projectType').value = '';
    document.getElementById('projectCategory').value = '';
    document.getElementById('projectDescription').value = '';
  }

  function showToastMessage() {
    // Display toast message for 3 seconds
    toastMessage.style.display = 'block';
    setTimeout(function() {
      toastMessage.style.display = 'none';
    }, 3000);
  }
});
