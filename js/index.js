window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
//  Create a function for dropdown menu using get elements by ID
function myNav() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
 
  // Close the dropdown if the user clicks outside of it
  function myNav() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
//Add Event Listener to Email Button and console.log message Your Message Is Sent
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Thank you for your email!");
}