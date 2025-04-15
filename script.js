const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task!'); // Alert if input is empty
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input box after adding the task
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span); // Append the span to the list item
        span.onclick = function() {
            listContainer.removeChild(li); // Remove the list item when the span is clicked
        }
    }
    addTask();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // Toggle the checked class on list item click
        addTask(); // Call addTask function to add a new task
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove the list item when the span is clicked
        addTask(); // Call addTask function to add a new task
    }
},false);


const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML); // Save the list to local storage
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data"); // Retrieve the list from local storage
}

showTask(); // Call showTask function to display saved tasks on page load
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask(); // Call addTask function when Enter key is pressed
    }
});