// script.js
document.addEventListener("DOMContentLoaded", function(){
  // Initialize AOS if loaded
  if(window.AOS) AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });

  // Simple form validation feedback for contact form
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const msg = contactForm.querySelector('#message').value.trim();
      if(!name || !email || !msg){
        alert('Please fill name, email and message before submitting.');
        return;
      }
      // Simulated success
      contactForm.querySelector('button[type=submit]').innerText = "Sending...";
      setTimeout(()=>{
        contactForm.reset();
        contactForm.querySelector('button[type=submit]').innerText = "Send Message";
        alert('Thanks! Your message was sent (demo). We will reply soon.');
      }, 900);
    });
  }
});
