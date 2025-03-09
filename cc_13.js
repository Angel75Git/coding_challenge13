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
    removeEmp.addEventListener("click", function () {
        container.removeChild(card);
    });
    //Appending Elements to parents
    card.appendChild(heading);
    card.appendChild(empPos);
    card.appendChild(removeEmp);
    container.appendChild(card);
}

// Test Cases:
createCards("John Doe", "Software Engineer");
createCards("Abel Green", "Data Analyst");
createCards("Adam Brown", "Senior Manager");
createCards("Luis Bays", " Electrical Engineer");