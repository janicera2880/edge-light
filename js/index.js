document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
//  Create a function for dropdown menu using get elements by ID
function myNav() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
 
  // Close the dropdown if the user clicks outside of it
  document.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  const grid = document.getElementsByClassName('grid-item');

getAllLights(API_URL)

 function getAllLights(){
  fetch('http://localhost:3000/lights')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    showAllLightsInfo(data.results);

  })
 }

 function showAllLightsInfo(data) {
  document.querySelector('grid-item').innerHTML = "";

  data.array.forEach(element => {
    const {name, style, color, category} = lights
    const lightElement = document.createElement('id')
  });
 }

//Add Event Listener to Email Button and send alert message Your Message Is Sent
document.getElementById("myBtn").addEventListener("click", deliverMail);

function deliverMail() {
  alert ("Thank you for your email!");
}

