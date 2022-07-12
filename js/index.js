document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
 
})
//Create a function for dropdown menu using get elements by ID
function myList() {
    document.getElementById("btnlist").classList.toggle("show");
    
  }

  // Close the dropdown if the user clicks outside of it
  document.onclick = function(e) {
    if (!e.target.matches('.btnlist')) {
    let myDropdown = document.getElementById("content");
      if (myDropdown.classList.contains('dropdown-content')) {
        myDropdown.classList.remove('dropdown-content');
      }
    }
  }
 

function renderedObject(light){
//Fetch URL and Build Gallery of Lights
let gallery = document.createElement('li')
gallery.className ='grid-item'
gallery.innerHTML = 
`<img src=${light.image} width="300" height="400"/>
<div class="content">
<h4>${light.name}</h4>
<h5>${light.category}<h5/>
</div>`

//Add Gallery to the DOM
document.querySelector('#light-list').appendChild(gallery)
}
//Fetch Request- Get Fetch for All Lights
function getAllLights(){
fetch('http://localhost:3000/lights')
.then(res => res.json())
.then(lights => lights.forEach(light => renderedObject(light)))
console.log('BEFORE RENDER')

}
function initialize(){

getAllLights()
console.log('after get all lights')

}

initialize()



 
//Add Event Listener to Email Button and send alert message Your Message Is Sent
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

