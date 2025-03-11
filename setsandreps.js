const exerciseSelector = document.getElementById("exercise-select");
const repsInput = document.getElementById("reps-input");
let selectedExercise = exerciseSelector.value;
const timer = document.getElementById("timer");
const addBtn = document.getElementById("add-reps-btn");
const resetBtn = document.getElementById("reset-reps-btn")
const startSetBtn = document.getElementById("start-set-btn")



    
// button functions.
addBtn.addEventListener("click", () => {
    let userRepsInput = repsInput.value;
    const repCounterContainer = document.getElementById("rep-counter-container");
    const repCounterAnimationDiv = document.createElement("div");
    const repCounterDiv = document.createElement("h1");

    if (userRepsInput) {
        repCounterAnimationDiv.classList.add("rep-loading-no-animation");
        repCounterDiv.innerHTML = `0 / ${userRepsInput}`;
        repCounterDiv.classList.add("rep-counter-div");
        repCounterDiv.setAttribute("data-reps", userRepsInput); 
        repCounterDiv.setAttribute("data-count", 0);
        repCounterContainer.appendChild(repCounterAnimationDiv);
        repCounterContainer.appendChild(repCounterDiv);
    } else {
        alert("Please input a number of reps");
    }
});

resetBtn.addEventListener("click", () => {
    const repCounterContainer = document.getElementById("rep-counter-container");
    repCounterContainer.innerHTML = "";
});

// counter function
let interval;

const repCounter = (repCounterDiv, repCounterAnimationDiv) => {
    const userRepsInput = repCounterDiv.getAttribute("data-reps");
    let countIndex = parseInt(repCounterDiv.getAttribute("data-count"));

    if (countIndex < userRepsInput) {
        repCounterAnimationDiv.classList.remove("rep-loading-no-animation");
        repCounterAnimationDiv.classList.add("rep-loading");
        countIndex++;
        repCounterDiv.innerHTML = `${countIndex} / ${userRepsInput}`;
        repCounterDiv.setAttribute("data-count", countIndex);
    } else {
        clearInterval(interval);
        repCounterAnimationDiv.classList.remove("rep-loading");
        repCounterAnimationDiv.classList.add("rep-loading-no-animation");
    }
};

startSetBtn.addEventListener("click", () => {
    const repCounterDiv = document.querySelector(".rep-counter-div");
    const repCounterAnimationDiv = document.querySelector(".rep-loading-no-animation");
    interval = setInterval(() => repCounter(repCounterDiv, repCounterAnimationDiv), 1000);
});

