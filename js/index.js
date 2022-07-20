document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM has loaded');
  
  //I wanted to create a demo search button where you can just type in any keyword and will remove search words when x is clicked
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

//I wanted to build a gallery of products in grid view to my main page light fixture catalog
function renderedObject(light){
//Fetch URL and Build Gallery of Lights
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
  <p>${light.glass.glass_material}</p>
  <p>${light.glass.glass_color}</p>
</div>`
document.querySelector('#light-list').appendChild(gallery)


gallery.addEventListener('click', () => {
  const button = gallery.querySelector('#button');

  button.innerText = 'Added To Favorite❤️';
  
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


//Fetch Request- Get Fetch for All Lights
function getAllLights() {
fetch('http://localhost:3000/lights')
.then(res => res.json())
.then(lights => lights.forEach(light => renderedObject(light)))

//.then(lights => lights.forEach(light => console.log(light)))

//.then(lights => console.log(lights))

//my second .then gives me my entire data array which is "lights". Next, for each light object in my array I'm passing each one to my renderObject function
//.then in a GET request will always display entire data object
}

function initialize(){

getAllLights()


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





 

