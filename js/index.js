document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
 
})
//Create a function for dropdown menu using get elements by ID
function myList() {
    document.getElementById("btnlist").classList.toggle("dropbtn");
    
  }

  // Close the dropdown if the user clicks outside of it
  document.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("#btnlist");
      if (myDropdown.classList.contains('dropdown')) {
        myDropdown.classList.remove('dropdown');
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
</div>
<div class="description">
<p>${light.style}</p>
  <p>${light.color}</p>
  <p>${light.shape}</p>
  <p>${light.material}</p>
</div>`

//Add Gallery to the DOM
document.querySelector('#light-list').appendChild(gallery)

gallery.addEventListener("mouseover", event => {
 //console.log("mouse in")
 const descriptionDiv = gallery.querySelector(".description")
 //descriptionDiv.style.display = "block";
 descriptionDiv.classList.add("displayed")
});
gallery.addEventListener("mouseleave", event => {
  //console.log("mouse in")
  const descriptionDiv = gallery.querySelector(".description")
  //descriptionDiv.style.display = "none";
  descriptionDiv.classList.remove("displayed")
 });

}

//Fetch Request- Get Fetch for All Lights
function getAllLights(){
fetch('http://localhost:3000/lights')
.then(res => res.json())
.then(lights => lights.forEach(light => renderedObject(light)))
 // console.log(lights)
  //console.log(lights.map(element => element.id))//
 
}

function initialize(){

getAllLights()
console.log('after get all lights')

}

initialize()
// Create Elements for footer and create submit event
function queryForm()
{
    let queryBox = document.getElementById("queryBox").style.display = "block";
    let queryForm = document.getElementById("queryForm");
    let linebreak = document.createElement("br");

    let lblName = document.createElement("label");
    lblName.textContent = "Name: ";
    queryForm.appendChild(lblName);

    let fullName = document.createElement("input");
    fullName.name = "fullName";
    fullName.type = "text";
    fullName.required = "required";
    queryForm.appendChild(fullName);
    queryForm.appendChild(linebreak);


    let lblEmail = document.createElement("label");
    lblEmail.textContent = "Email: ";
    queryForm.appendChild(linebreak);
    queryForm.appendChild(lblEmail);

    let email = document.createElement("input");
    email.name = "email";
    email.type = "text";
    email.required = "required";
    queryForm.appendChild(email);


    let lblPhoneNumber = document.createElement("label");
    lblPhoneNumber.textContent = "Phone Number: ";
    queryForm.appendChild(linebreak);
    queryForm.appendChild(lblPhoneNumber);

    let phoneNumber = document.createElement("input");
    phoneNumber.name = "phoneNumber";
    phoneNumber.type = "text";
    phoneNumber.required = "required";
    queryForm.appendChild(phoneNumber);


    let submitQuery = document.createElement("input");
    submitQuery.type = "submit";
    submitQuery.value = "Submit Query";
    queryForm.appendChild(linebreak);
    queryForm.appendChild(submitQuery);

    let resetForm = document.createElement("input");
    resetForm.type = "reset";
    resetForm.value = "Reset";
    queryForm.appendChild(resetForm);

    document.getElementById("#myFormId").addEventListener("submit", function(e){
      if(!isValid){
          e.preventDefault();    
      }
      
    });
}






 

