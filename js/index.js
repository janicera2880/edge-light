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
  
function renderedObject(light){
//Build Gallery of Lights
let gallery = document.createElement('item')
gallery.className = 'grid-item'
gallery.innerHTML = 
`<img src=${light.imageUrl} width="300" height="400"/>
<div class="content">
<h4>${light.name}</h4>
</div>`
//Add Gallery to the DOM
document.querySelector('#light-list').appendChild(gallery)
fetch('http://localhost:3000/lights')
.then(res => res.json())
.then(data => {
  console.log(data)

})
}
function initialize(){
//lightData.array.forEach(light => renderedObject(light))
 }
initialize()



 
 
//Add Event Listener to Email Button and send alert message Your Message Is Sent
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

