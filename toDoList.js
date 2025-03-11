const input = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn")
const listContainer = document.getElementById("list-container")
const clearBtn = document.getElementById("clear")



// This is where the application will be

submitBtn.addEventListener("click", () => {
    const userInput = input.value.trim();
    const newTask = document.createElement("ul")
      //new div for task
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-div")
      
      //add check btn
      const checkBtn = document.createElement("button");
      checkBtn.classList.add("fa", "fa-check")

      // add delete btn
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("fa", "fa-trash")
     // delete btn
     deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      taskDiv.remove() })

    if(userInput) {
        newTask.classList.add("task");
        newTask.textContent = userInput

    } else {
        alert("please insert a task")
    }

    taskDiv.appendChild(newTask)
    taskDiv.appendChild(checkBtn)
    taskDiv.appendChild(deleteBtn)
    listContainer.appendChild(taskDiv);
    input = ""
})






//clear task list
clearBtn.addEventListener("click", () => {
    listContainer.innerHTML = "";
})

