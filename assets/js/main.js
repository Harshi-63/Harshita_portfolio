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
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
emailjs.init({
    publicKey: 'tLU2aLEyWNABCulHI',
  });
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');

   const sendEmail = (e) => {
     e.preventDefault();
     contactMessage.textContent = "Sending...";

      emailjs.sendForm('service_uhmge7y', 'template_gd56fll', contactForm)
        .then(() => {
            contactMessage.textContent = "Message sent successfully ✅";
            contactForm.reset(); // Clear the form after submission
            })
         .catch((error) => {
            contactMessage.textContent = "Error sending message ❌";
            console.error("EmailJS Error:", error);
            alert("Error: " + JSON.stringify(error));
         });
};

contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
