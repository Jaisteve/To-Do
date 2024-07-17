

// var ul = document.getElementById("list-container");
// var input = document.getElementById("todo-input");

// function add(todoID, todo) {
//     var input = input.value;
//     var listitem = document.createElement("li");
//     listitem.className = "todo";
//     listitem.innerHTML =input.value + `
//         <input type="checkbox" id="${todoID}">
//         <label class="custom-checkbox" for="${todoID}">
//             <img src="./done.svg" height="24" width="24">
//         </label>
//         <label for="${todoID}" class="todo-text">${todo}</label>
//         <button onclick="del(event)" class="delete-btn">
//             <img src="./delete.svg" alt="">
//         </button>
//     `;
    
//     // Append the list item to the ul element
//     ul.appendChild(listitem);
    
//     // Clear the input field after adding the todo
//     input.value = "";
// }

// // Example of binding add function to a button click event
// var addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
//     // Generate unique ID for todo (you can use a library or a unique counter)
//     var todoID = generateUniqueID(); // Example function to generate unique ID
//     var todo = input.value;
//     add(todoID, todo);
// });



// function del(event)
// {
//     event.target.parentElement.remove();
// }


// JavaScript for todo list functionality

// Function to add a new todo item
function add() {
    var input = document.getElementById("todo-input");
    var ul = document.getElementById("list-container");

    // Get the input value
    var todoText = input.value.trim(); // Use trim to remove leading and trailing whitespace

    // Check if input value is empty
    if (todoText === "") {
        alert("Please enter a todo item.");
        return; // Exit function if input is empty
    }

    // Generate unique ID for todo (you can use a library or a unique counter)
    var todoID = generateUniqueID(); // Example function to generate unique ID

    // Create list item element
    var listitem = document.createElement("li");
    listitem.className = "todo";
    listitem.innerHTML = `
        <input type="checkbox" id="${todoID}">
        <label class="custom-checkbox" for="${todoID}">
            <img src="./done.svg" height="24" width="24">
        </label>
        <label for="${todoID}" class="todo-text">${todoText}</label>
        <button onclick="del(event)" class="delete-btn">
            <img src="./delete.svg" alt="">
        </button>
    `;

    // Append the list item to the ul element
    ul.appendChild(listitem);

    // Clear the input field after adding the todo
    input.value = "";
}

// Function to delete a todo item
function del(event) {
    event.target.closest("li").remove();
}

// Example function to generate unique ID (you may use a more sophisticated method)
function generateUniqueID() {
    return "todo-" + Date.now(); // Simple timestamp-based ID
}
