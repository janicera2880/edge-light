document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM has loaded');
  
  //Subscribe to Newsletter
  //declare variable form and add eventlistener submit
  //add event listener click to button and add text content and when clicked will be removed
  //event prevent default so the submit form will not actually submit
  let form = document.getElementById('subscribe-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(event.target['mySubscription'].value)
    p = document.createElement('p');
    button = document.createElement('button')
    button.textContent = 'You are added to our mailing list!'
    button.addEventListener('click', function(){
    this.parentNode.remove()
    })

    p.textContent = `${event.target['mySubscription'].value} `
    console.log(p)
    form.appendChild(p)
    p.appendChild(button)

   
  })

});

//Build Gallery of Lighting Fixtures
//create rederedObject function and pass parameter of light

function renderedObject(light){
let gallery = document.createElement('li')
gallery.className ='grid-item'
gallery.innerHTML = 
`<img src=${light.image} width="400" height="500"/>
<h5>${light.name}</h5><div class="content">
<button id="button">Favorite❤️</button>
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
//Add galllery of lights to the DOM
document.querySelector('#light-list').appendChild(gallery)


gallery.addEventListener('click', () => {
  const button = gallery.querySelector('#button');

  button.innerText = 'Added To Favorites❤️';
  
setTimeout(() => {
  button.innerText = 'Favorite❤️';
  }, 1000);
});


// Create Mouseover Event and Mouseleave
gallery.addEventListener("mouseover", event => {
 //console.log("mouse in")
 const descriptionDiv = gallery.querySelector(".description")
 
 descriptionDiv.classList.add("displayed")
});
gallery.addEventListener("mouseleave", event => {
  //console.log("mouse out")
  const descriptionDiv = gallery.querySelector(".description")
  
  descriptionDiv.classList.remove("displayed")
 });

}


//Fetch Request to the server- Get Fetch for All Lights
function getAllLights() {
fetch('http://localhost:3000/lights')
.then(res => res.json())
//.then(lights => console.log(lights))
.then(lights => lights.forEach(light => renderedObject(light)))
 
//.then(lights => lights.forEach(light => console.log(light)))


//my second .then gives a promise response my entire data array which is "lights". 
//.then in a GET request will display entire data object and for each light object in my array I'm passing each one to my renderObject function
}
//Initial Render Get data and render lights to DOM--- will contine to load while waiting for Fetch to get data
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
  document.getElementsByClassName("clickButton"))
  clickButton.addEventListener("click", alertMessage);
  function alertMessage() {
     alert("Your Email Was Successfully Sent, We'll Get Back With You Shortly!");
  }





 

