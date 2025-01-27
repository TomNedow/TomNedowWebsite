const exerciseName = document.getElementById("name");
const category = document.getElementById("category");
const targetMuscles = document.getElementById("target-muscles");
const exerciseType = document.getElementById("excercise-type");
const modifications = document.getElementById("modifications");
const exerciseNotes = document.getElementById("exercise-notes");
const video = document.getElementById("exercise-video")
const userSelection = document.getElementById("search-bar");
const userSelectionBtn = document.getElementById("search-exercise-btn");
const videoContainer = document.getElementById("exercise-library-video-container")
const exerciseCards = document.querySelectorAll(".short-exercise-card")
let selectedExercise = null;


// Here is where your exercises will be held
const exercises = [
    {
        name: 'Push Up',
        category: 'Upper Body',
        mainOrAccessory: 'Both',
        equipment: 'Body Weight',
        description: "Start in a high plank with hands slightly wider than shoulders. Lower your chest toward the floor while keeping your body straight, then push back up to the starting position.",
        modifications: "Kneeling Push Up, Military Push Up, DB Bench Press, Incline or Decline Push Up",
        video: 'https://www.youtube.com/embed/JyCG_5l3XLk', 
        exerciseNotes: ' start in a high plank position with your hands slightly wider than shoulder-width apart, lower your body by bending your elbows while keeping your body straight, then push back up to the starting position.',
        image: "images/PushupsIMG.jpg"
    },
    {
        name: 'Squat',
        category: 'Lower Body',
        mainOrAccessory: 'Main',
        equipment: 'Weighted',
        description: "Stand with feet shoulder-width apart. Lower your hips back and down as if sitting in a chair, keeping your chest up and knees over your toes. Push through your heels to return to standing.",
        modifications: "Box Squat, Goblet Squat, Bulgarian Squats",
        video: "https://www.youtube.com/embed/ultWZbUMPL8?si=euA68watIK_4MbLI",
        exerciseNotes: 'Stand with your feet shoulder-width apart, lower your hips back and down as if sitting in a chair, keeping your chest up and knees over your toes, then push through your heels to return to standing.', 
        image: "images/squat.avif "
    },
    {
        name: 'Pull Up',
        category: 'Upper Body',
        mainOrAccessory: 'Both',
        equipment: 'Body Weight or Weighted',
        description: "Hands shoulder width apart, while using your elbows to contract your scaps together, pull your chest up to the bar",
        modifications: "Inverted Row, Pull Downs, TRX Row, Chin Ups",
        video: "https://www.youtube.com/embed/p40iUjf02j0?si=Q7M6_BqrnT5gb8cW", 
        exerciseNotes: 'Grab a pull-up bar with your hands shoulder-width apart, engage your back and core, and pull your chin above the bar by driving your elbows down and back', 
        image: "images/pull up.jpg"
    },
    {
        name: 'Deadlift',
        category: 'Total Body',
        mainOrAccessory: 'Main',
        equipment: "Barbell",
        description:"To perform a deadlift, stand with your feet shoulder-width apart, grip the barbell just outside your knees, keep your back straight, engage your core, and drive through your heels to lift the bar while keeping it close to your body." ,
        modifications:"DB Deadlift, Zercher Squat, FrontSquat",
        video: "https://www.youtube.com/embed/r4MzxtBKyNE" ,
        exerciseNotes:"Flat back and lift through the heels",
        image: ""
    },
    {
        name: 'Clean',
        category: 'Total Body',
        mainOrAccessory: 'Main',
        equipment: "Barbell",
        description:"The clean and jerk is a two-part Olympic lift where you lift a barbell from the ground to your shoulders (clean), then explosively drive it overhead to full extension (jerk) with proper form and control." ,
        modifications:"Clean pulls, hang clean, trap bar jumps",
        video: "https://www.youtube.com/embed/ylzAXlDifu0?si=zFh91b3yoKLvEsmA" ,
        exerciseNotes:"Big Pull!!!",
        image: ""
    },
    {
        name: 'Snatch',
        category: 'Total Body',
        mainOrAccessory: 'Main',
        equipment: "Barbell",
        description:"The snatch is an Olympic lift where you explosively lift a barbell from the ground to overhead in one continuous motion, using a wide grip, with the bar passing close to your body as you extend your hips, knees, and ankles before locking out overhead." ,
        modifications:"DB Deadlift, Zercher Squat, FrontSquat",
        video: "https://www.youtube.com/embed/yHZ1eZ8fJjc?si=3c3G2jlKkj8Ga8LC" ,
        exerciseNotes:"Big Pull!",
        image: ""
    }
];



// Function that will match user selection to display
userSelectionBtn.addEventListener("click", () => {
    const searchValue = userSelection.value.toLowerCase().replace(/-/g, " "); 
    

    // Find the exercise that matches the search value
    const matchedExercise = exercises.find(exercise =>
        exercise.name.toLowerCase().includes(searchValue)
    );

    if (matchedExercise) {
        exerciseName.textContent = matchedExercise.name;
        category.textContent = matchedExercise.category;
        targetMuscles.textContent = matchedExercise.mainOrAccessory;
        exerciseType.textContent = matchedExercise.equipment;
        modifications.textContent = matchedExercise.modifications;
        exerciseNotes.textContent = matchedExercise.exerciseNotes;
        // check to see if theres a video
        if (matchedExercise.video) {
            videoContainer.innerHTML = ''; // Clear existing content

        
            const iframe = document.createElement('iframe');
            iframe.src = matchedExercise.video; 
            iframe.width = '560';
            iframe.height = '315';
            iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
        
            videoContainer.appendChild(iframe);
        } else {
            videoContainer.innerHTML = 'No video available for this exercise.';
        }
    } else {
        selectedExercise = null;
        exerciseName.textContent = "We don't have that exercise listed";
        category.textContent = "";
        targetMuscles.textContent = "";
        exerciseType.textContent = "";
        modifications.textContent = "";
        exerciseNotes.textContent = "";
    }
});

//this will be adding an exercise to the hidden workout program
const addToWorkoutBtn = document.getElementById("workout-btn-add");

addToWorkoutBtn.addEventListener("click", () => {
    const exerciseStats = document.getElementById("exercise-stats");
    const exerciseContainer = document.getElementById("exercise-container");

    const nameElement = exerciseStats?.querySelector("#name");
    const categoryElement = exerciseStats?.querySelector("#category");
    const noteElement = exerciseStats?.querySelector("#exercise-notes");

    const selectedExerciseName = nameElement?.textContent.trim();
    const selectedExerciseCategory = categoryElement?.textContent.trim();
    const selectedExerciseNotes = noteElement?.textContent.trim();

    if (selectedExerciseName) {
        // Create a container div for the new exercise info
        const newDiv = document.createElement('div');
        
        // Create separate elements for each piece of information
        const exerciseNameDiv = document.createElement('h1');
        exerciseNameDiv.textContent = `Exercise: ${selectedExerciseName}`;
        exerciseNameDiv.style.color = "black"; // You can style this separately

        const categoryDiv = document.createElement('p');
        categoryDiv.textContent = `Category: ${selectedExerciseCategory}`;
        categoryDiv.style.fontStyle = "italic"; // Example of different styling for category

        const noteDiv = document.createElement('p');
        noteDiv.textContent = `Note: ${selectedExerciseNotes}`;
        noteDiv.style.color = "#555"; // Example of different styling for note

        // Append each element to the newDiv container
        newDiv.appendChild(exerciseNameDiv);
        newDiv.appendChild(categoryDiv);
        newDiv.appendChild(noteDiv);

        // Append the newDiv to the exerciseContainer
        exerciseContainer.appendChild(newDiv);
    } else {
        alert("Please select an exercise first.");
    }
});

//this area will be to when a card is clicked, that the exercises show up in the display
exerciseCards.forEach(card => {
    card.addEventListener("click", () => {
        const exerciseTitle = card.querySelector("h1").textContent.trim();
        const matchedExercise = exercises.find(exercise => exercise.name === exerciseTitle);

        if (matchedExercise) {
            // Update the display 
            exerciseName.textContent = matchedExercise.name;
            category.textContent = matchedExercise.category;
            targetMuscles.textContent = matchedExercise.mainOrAccessory;
            exerciseType.textContent = matchedExercise.equipment;
            modifications.textContent = matchedExercise.modifications;
            exerciseNotes.textContent = matchedExercise.exerciseNotes;

            // Update video
            if (matchedExercise.video) {
                videoContainer.innerHTML = '';
                const iframe = document.createElement('iframe');
                iframe.src = matchedExercise.video;
                iframe.width = '560';
                iframe.height = '315';
                iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                videoContainer.appendChild(iframe);
            } else {
                videoContainer.innerHTML = 'No video available for this exercise.';
            }
        }
    });
});

//this will be the function for displaying upper body cards
const upperBodyExercisesContainer = document.getElementById("upper-body-exercises-container");

const showUpperBodyExercise = () => {
    // Filter exercises by category "Upper Body"
    const upperBodyExercises = exercises.filter(exercise => exercise.category === "Upper Body");

    // Clear the container before adding new cards
    upperBodyExercisesContainer.innerHTML = "";

    // Loop through the filtered exercises and create cards
    upperBodyExercises.forEach(exercise => {
        const exerciseCard = document.createElement("div");
        exerciseCard.classList.add("short-exercise-card");

        // Create the HTML structure for each exercise card
        exerciseCard.innerHTML = `
            <h1>${exercise.name}</h1>
            <div class="image-container">
                <img src="${exercise.image}" alt="${exercise.name} image">
            </div>
            <div class="highlight">
                <p class="upper-body-highlight">${exercise.category}</p>
            </div>
            <div class="card-notes-section">
                <p>${exercise.description}</p>
            </div>
            <div class="footer">
                <button class="workout-btn-add">Add Exercise</button>
            </div>
        `;

        // Append the exercise card to the container
        upperBodyExercisesContainer.appendChild(exerciseCard);
    });
};

// Call the function to display the upper body exercises
showUpperBodyExercise();


//shows lower body exercises

const lowerBodyExerciseContainer = document.getElementById("lower-body-exercises-container")

const showLowerBodyExercise = () => {

    // Filter exercises by category "Upper Body"
    const lowerBodyExercises = exercise.filter(exercise => exercise.category === "Lower Body")

// Clear the container before adding new cards
    lowerBodyExerciseContainer.innerHTML = ""
// Loop through the filtered exercises and create cards
lowerBodyExercises.forEach(exercise => {
    const exerciseCard = document.createElement("div");
    exerciseCard.classList.add("short-exercise-card");

    exerciseCard.innerHTML = `
    <h1>${exercise.name}</h1>
            <div class="image-container">
                <img src="${exercise.image}" alt="${exercise.name} image">
            </div>
            <div class="highlight">
                <p class="upper-body-highlight">${exercise.category}</p>
            </div>
            <div class="card-notes-section">
                <p>${exercise.description}</p>
            </div>
            <div class="footer">
                <button class="workout-btn-add">Add Exercise</button>
            </div>
    
    `

    lowerBodyExerciseContainer.appendChild(exerciseCard)
})
}