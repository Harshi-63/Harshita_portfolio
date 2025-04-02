/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.classList.toggle('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link'); // Select all links

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu'); // Hide the menu when a link is clicked
};

// Loop through each link and add event listener
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader =() =>{
    const header=document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");  // Get the contact form
    const contactMessage = document.getElementById("contact-message"); // Get the message element

    // Event listener for form submission
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        contactMessage.textContent = "Sending... ⏳";  // Update the message text while sending

        // Create FormData object from the contact form
        const formData = new FormData(contactForm);

        // Send the form data using Fetch API to the FormSubmit endpoint
        fetch("https://formsubmit.co/shreyaharshita2693@gmail.com", {
            method: "POST",  // HTTP method to be used for form submission
            body: formData,  // The form data to be sent
        })
            .then((response) => {
                if (response.ok) {
                    contactMessage.textContent = "Message sent successfully ✅";  // Success message
                    contactMessage.style.color = "green";  // Change text color to green on success
                    contactForm.reset();  // Clear the form after submission
                } else {
                    throw new Error("Failed to send message");  // Error if the response is not okay
                }
            })
            .catch((error) => {
                contactMessage.textContent = "Error sending message ❌";  // Error message
                contactMessage.style.color = "red";  // Change text color to red on error
                console.error("FormSubmit Error:", error);  // Log the error for debugging
            });
    });
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up');

    if (window.scrollY >= 350) { // Show when scrolled down 350px
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (sectionsClass) { // Check if the element exists before modifying classes
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image',{origin: 'bottom'})
sr.reveal('.about__data, .skill__data',{origin: 'left'})
sr.reveal('.about__image, .skill__content',{origin: 'right'})
sr.reveal('.services__card, .projects__card',{interval: 100})