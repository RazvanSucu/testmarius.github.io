const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});



function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "razvansucu02@gmail.com",
    Password : "password",
    To : 'razvansucu02@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}