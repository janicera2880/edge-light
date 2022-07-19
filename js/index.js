document.addEventListener('DOMContentLoaded', () => {
  //The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
  //Declare variable form by ID product-form
  let form = document.getElementById('product-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(event.target['mySearch'].value)
    p = document.createElement('p');
    button = document.createElement('button')
    button.textContent = ' x '
    button.addEventListener('click', function(){
      this.parentNode.remove()
    })
    p.textContent = `${event.target['mySearch'].value} `
    console.log(p)
    form.appendChild(p)
    p.appendChild(button)
  })
});


function renderedObject(light){
//Fetch URL and Build Gallery of Lights
let gallery = document.createElement('li')
gallery.className ='grid-item'
gallery.innerHTML = 
`<img src=${light.image} width="400" height="500"/>
<h5>${light.name}</h5>
<div class="content">

</div>
<div class="description">
  
  <p>Description:</p>
  <p>${light.category}</p>  
  <p>${light.style}</p>
  <p>${light.color}</p>
  <p>${light.shape}</p>
  <p>${light.size}</p>
  <p>${light.material}</p>
  <p>${light.voltage}</p>

</div>`

//Add Gallery to the DOM
document.querySelector('#light-list').appendChild(gallery)
// Create Mouseover Event and Mouseleave
gallery.addEventListener("mouseover", event => {
 //console.log("mouse in")
 const descriptionDiv = gallery.querySelector(".description")
 
 descriptionDiv.classList.add("displayed")
});
gallery.addEventListener("mouseleave", event => {
  //console.log("mouse leave")
  const descriptionDiv = gallery.querySelector(".description")
  
  descriptionDiv.classList.remove("displayed")
 });

}

//Fetch Request- Get Fetch for All Lights
function getAllLights(){
fetch('http://localhost:3000/lights')
.then(res => res.json())
.then(lights => lights.forEach(light => renderedObject(light)))
 console.log("Before DOM loads") 
}

function initialize(){

getAllLights()
console.log('after get all lights')

}
initialize()


//Click Button Alert Event Listener--- I use a callback function.
//It takes 2 parameters. The first one is its type, “click”, and the second parameter is a callback function, which logs the message when the button is clicked.
//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
//Clicking submit button will prevent it fropm submitting a form
for (let clickButton of
  document.getElementsByClassName("clickbutton"))
  clickButton.addEventListener("click", alertMessage);
  function alertMessage() {
alert("Your Email Was Successfully Sent, We'll Get Back With You Shortly!");
e.preventDefault()
}





 

