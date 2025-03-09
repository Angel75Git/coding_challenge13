//Task 2
//Adding Employee Cards Dynamically

function createCards(name, position) {
    const container = document.getElementById("employeeContainer");
    //Creating a div so all cards fit inside their own vid
    const card = document.createElement("div");
    //setting attributes
    card.setAttribute("id", position)
    card.setAttribute("class", "employee-card");
    
    const heading = document.createElement("h2");
    heading.textContent = name;
    //<--Populating element --->
    const empPos = document.createElement("p");
    empPos.textContent = `I work as a ${position} at VISION Corp.`;
    
    //Adding a remove button as well as function to delete employee card
    const removeEmp = document.createElement("button");
    removeEmp.textContent = "Remove";

    //Using Remove Child + stopPropagation
    removeEmp.addEventListener("click", function (event){
        event.stopPropagation();
        container.removeChild(card);
      
    })

    //Appending Elements to parents
    card.appendChild(heading);
    card.appendChild(empPos);
    card.appendChild(removeEmp);
    container.appendChild(card);  

    //Double Click event:
    card.addEventListener("dblclick", function(){
        editCards(card, heading, empPos);
    })

    //Function for editing cards
//Task 5
function editCards(card, heading, empPos){
    //Name input 
    const inputBox = document.createElement("input")
    inputBox.value = heading.textContent;
    
    //Position input
    const inputPos = document.createElement("input")
    inputPos.value = empPos.textContent.replace("I work as a ", "").replace("at VISION Corp.", "") 
    
    //Save Button
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Submit";
    
    card.innerHTML = "";
//Appending new values to div
    card.appendChild(inputBox)
    card.appendChild(inputPos)
    card.appendChild(saveBtn)
   
    //Funcitonality double click
    saveBtn.addEventListener("click", function () {
        heading.textContent = inputBox.value;
        empPos.textContent = `I work as a ${inputPos.value} at VISION Corp.`;
        
        card.innerHTML = ""
        //append new values to card
        card.appendChild(heading);
        card.appendChild(empPos);
        card.appendChild(saveBtn)
        
})
}};



// Test Cases:
createCards("John Doe", "Software Engineer");
createCards("Abel Green", "Data Analyst");
createCards("Adam Brown", "Senior Manager");
createCards("Luis Bays", " Electrical Engineer");

//Task 3
//Converting Nodelist to array
const employeeCards = Array.from(document.querySelectorAll(".employee-card"));
employeeCards.forEach(card => {
    //Adding a light blue background
    card.style.background = "lightblue"
    //Extra border around cards
    card.style.border = "1px solid black"
})

//Task 4
const container = document.getElementById("employeeContainer");
//Logging a message whenever employeeContainer clicked
container.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Employee card clicked!");
});
