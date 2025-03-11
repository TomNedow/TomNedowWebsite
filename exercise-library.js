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

// search bar hide and show function
const searchBtn = document.getElementById('search-icon-btn')

// to show search bar 

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const searchInput = document.getElementById("search-input")
    const searchBarForm = document.getElementById("nav-search-bar")

    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchInput.style.width = "100%"
        //this is for the container
        searchBarForm.style.display = "flex";
        searchBarForm.style.justifyContent = "space-between";
        searchBarForm.style.gap = "10px";
    } else {
        searchInput.style.display = "none";
    }

})

// Here is where your exercises will be held
const exercises = [
    {
        name: 'Push Up',
        category: 'Upper Body',
        mainOrAccessory: 'Both',
        equipment: 'Body Weight',
        description: "Start in a high plank with hands slightly wider than shoulders. Lower your chest toward the floor while keeping your body straight, then push back up to the starting position.",
        modifications: "Kneeling Push Up, Military Push Up, DB Bench Press, Incline or Decline Push Up",
        difficulty: "Beginner",
        video: 'https://www.youtube.com/embed/JyCG_5l3XLk', 
        exerciseNotes: 'Control on the way down, explode on the way up!',
        image: "images/PushupsIMG.jpg",
        tag: "popular",
    },
    {
        name: 'Squat',
        category: 'Lower Body',
        mainOrAccessory: 'Main',
        equipment: 'Weighted',
        description: "Stand with feet shoulder-width apart. Lower your hips back and down as if sitting in a chair, keeping your chest up and knees over your toes. Push through your heels to return to standing.",
        modifications: "Box Squat, Goblet Squat, Bulgarian Squats",
        difficulty: "Beginner",
        video: "https://www.youtube.com/embed/ultWZbUMPL8?si=euA68watIK_4MbLI",
        exerciseNotes: 'Stand with your feet shoulder-width apart, lower your hips back and down as if sitting in a chair, keeping your chest up and knees over your toes, then push through your heels to return to standing.', 
        image: "images/squat.avif ",
        tag: "popular",
    },
    {
        name: 'Goblet Squat',
        category: 'Lower Body',
        mainOrAccessory: 'Main',
        equipment: 'Dumbbell or Kettlebell',
        description: "Hold a dumbbell or kettlebell close to your chest with both hands, keeping your elbows pointed downward. Lower your hips back and down, keeping your chest up and knees over your toes. Push through your heels to return to standing.",
        modifications: "Bodyweight Goblet Squat, Kettlebell Goblet Squat",
        difficulty: "Beginner",
        video: "https://www.youtube.com/embed/6xw5l9ZQJ1I",
        exerciseNotes: "Hold a dumbbell or kettlebell close to your chest, lower your hips back and down, and keep your chest up and knees aligned with your toes. This squat variation helps improve posture and mobility.",
        image: "images/gobletSquat.jpg",
        tag: "",
    },
    
    {
        name: 'Walking Lunges',
        category: 'Lower Body',
        mainOrAccessory: 'Accessory',
        equipment: 'Bodyweight or Dumbbells',
        description: "Take a step forward with one leg, lowering your back knee toward the ground in a lunge position. Push off your front foot to bring your back foot forward into the next lunge. Repeat on the other leg.",
        modifications: "Reverse Lunge, Weighted Walking Lunge",
        difficulty: "Intermediate",
        video: "https://www.youtube.com/embed/QOVaHwm-Q6U",
        exerciseNotes: "Ensure your knee doesn't pass over your toes during the lunge. Engage your core to maintain balance and control throughout the movement.",
        image: "images/walkingLunge.jpg",
        tag: "",
    },
    
    {
        name: 'Front Squat',
        category: 'Lower Body',
        mainOrAccessory: 'Main',
        equipment: 'Barbell',
        description: "Position the barbell on the front of your shoulders, gripping it with your hands slightly wider than shoulder-width. Keep your chest up and elbows high as you squat down, keeping your knees over your toes. Push through your heels to return to standing.",
        modifications: "Bodyweight Squat, Dumbbell Front Squat",
        difficulty: "Advanced",
        video: "https://www.youtube.com/embed/uYumuL_G_V0?si=QrZ2QGoxoFitxHqF",
        exerciseNotes: "Keep your elbows elevated and chest up to prevent the bar from rolling forward. Focus on maintaining a strong core and proper squat depth.",
        image: "images/front squat.jpg",
        tag: "",
    },
    {
        name: 'Pull Up',
        category: 'Upper Body',
        mainOrAccessory: 'Both',
        equipment: 'Body Weight or Weighted',
        description: "Hands shoulder width apart, while using your elbows to contract your scaps together, pull your chest up to the bar",
        modifications: "Inverted Row, Pull Downs, TRX Row, Chin Ups",
        difficulty: "Beginner",
        video: "https://www.youtube.com/embed/p40iUjf02j0?si=Q7M6_BqrnT5gb8cW", 
        exerciseNotes: 'Grab a pull-up bar with your hands shoulder-width apart, engage your back and core, and pull your chin above the bar by driving your elbows down and back', 
        image: "images/pull up.jpg",
        tag: "popular",
    },
    {
        name: 'Dumbbell Bench Press',
        category: 'Upper Body',
        mainOrAccessory: 'Main',
        equipment: 'Dumbbells',
        description: "Lie flat on a bench with a dumbbell in each hand. Press the dumbbells up until your arms are fully extended, then lower them back down to chest level.",
        modifications: "Incline Dumbbell Bench Press, Dumbbell Flyes",
        difficulty: "Intermediate",
        video: "https://www.youtube.com/embed/8iP5z3p9w8A?si=w1ZyqS8Z9FCqxXbK",
        exerciseNotes: 'Ensure that your elbows are at a 45-degree angle and keep your feet flat on the floor while pressing the dumbbells.',
        image: "images/dumbbell-bench-press.avif",
        tag: "",
    },
    
    {
        name: 'Military Press',
        category: 'Upper Body',
        mainOrAccessory: 'Main',
        equipment: 'Barbell or Dumbbells',
        description: "Stand with your feet shoulder-width apart and press a barbell or dumbbells overhead, keeping your core tight and back straight.",
        modifications: "Seated Military Press, Arnold Press",
        difficulty: "Intermediate",
        video: "https://www.youtube.com/embed/B-aVuyhvLHU?si=3qBcvkE8F7wM1hf2",
        exerciseNotes: 'Do not arch your back excessively, and avoid leaning backward when pressing the weight overhead.',
        image: "images/military-press.jpg",
        tag: "popular",
    },
    {
        name: 'Bench Press',
        category: 'Upper Body',
        mainOrAccessory: 'Main',
        equipment: 'Barbell',
        description: "Lie flat on a bench with a barbell positioned above your chest. Lower the barbell to your chest, then press it back up to the starting position, keeping your feet flat on the floor and your core engaged.",
        modifications: "Incline Bench Press, Dumbbell Bench Press, Close-Grip Bench Press",
        difficulty: "Intermediate",
        video: "https://www.youtube.com/embed/gRVjAtPip0Y?si=dt4VnQ1hHpv5gq6r",
        exerciseNotes: 'Make sure to keep your elbows at a 45-degree angle from your body and avoid bouncing the bar off your chest.',
        image: "images/bench-press.jpg",
        tag: "popular",
    },
    {
        name: 'Shrugs',
        category: 'Upper Body',
        mainOrAccessory: 'Accessory',
        equipment: 'Dumbbells or Barbell',
        description: "Hold a dumbbell or barbell at your sides and shrug your shoulders up toward your ears, squeezing your traps at the top.",
        modifications: "Cable Shrugs, Smith Machine Shrugs",
        difficulty: "Beginner",
        video: "https://www.youtube.com/embed/1oed-UmAxFs?si=8gqLZCq5uAp9I3xB",
        exerciseNotes: 'Focus on squeezing your shoulder blades together at the top of the movement.',
        image: "images/shrugs.jpg",
        tag: "",
    },
    
    {
        name: 'Bent Over Rows',
        category: 'Upper Body',
        mainOrAccessory: 'Main',
        equipment: 'Barbell or Dumbbells',
        description: "Bend at the waist with a flat back, hold a barbell or dumbbells, and pull the weight toward your torso while keeping your elbows close to your body.",
        modifications: "Single Arm Dumbbell Row, T-Bar Row",
        difficulty: "Intermediate",
        video: "https://www.youtube.com/embed/vT2GjY_Umpw?si=0F0Vw6H0ZTeU7SYW",
        exerciseNotes: 'Keep your back straight and avoid rounding your shoulders during the movement.',
        image: "images/bent-over-row.jpg",
        tag: "",
    },
    
    {
        name: 'Face Pulls',
        category: 'Upper Body',
        mainOrAccessory: 'Accessory',
        equipment: 'Cable Machine or Resistance Bands',
        description: "Pull the rope attachment towards your face, keeping your elbows high and squeezing your shoulder blades together.",
        modifications: "Reverse Flyes, Band Pull-Aparts",
        difficulty: "Beginner",
        video: "https://www.youtube.com/embed/repQ9J3d1vY?si=Fq00zJAXjTYvGm2Y",
        exerciseNotes: 'Focus on retracting your shoulder blades and externally rotating your shoulders.',
        image: "images/face-pull.jpg",
        tag: "",
    },
    {
        name: 'Deadlift',
        category: 'Total Body',
        mainOrAccessory: 'Main',
        equipment: "Barbell",
        description:"To perform a deadlift, stand with your feet shoulder-width apart, grip the barbell just outside your knees, keep your back straight, engage your core, and drive through your heels to lift the bar while keeping it close to your body." ,
        modifications:"DB Deadlift, Zercher Squat, FrontSquat",
        difficulty: "Intermediate",
        video: "https://www.youtube.com/embed/r4MzxtBKyNE" ,
        exerciseNotes:"Flat back and lift through the heels",
        image: "images/deadlift.avif",
        tag: "popular",
    },
    {
        name: 'Clean',
        category: 'Total Body',
        mainOrAccessory: 'Main',
        equipment: "Barbell",
        description:"The clean and jerk is a two-part Olympic lift where you lift a barbell from the ground to your shoulders (clean), then explosively drive it overhead to full extension (jerk) with proper form and control." ,
        modifications:"Clean pulls, hang clean, trap bar jumps",
        difficulty: "advanced",
        video: "https://www.youtube.com/embed/ylzAXlDifu0?si=zFh91b3yoKLvEsmA" ,
        exerciseNotes:"Big Pull!!!",
        image: "",
    },
    {
        name: 'Snatch',
        category: 'Total Body',
        mainOrAccessory: 'Main',
        equipment: "Barbell",
        description:"The snatch is an Olympic lift where you explosively lift a barbell from the ground to overhead in one continuous motion, using a wide grip, with the bar passing close to your body as you extend your hips, knees, and ankles before locking out overhead." ,
        modifications:"DB Deadlift, Zercher Squat, FrontSquat",
        difficulty: "advanced",
        video: "https://www.youtube.com/embed/yHZ1eZ8fJjc?si=3c3G2jlKkj8Ga8LC" ,
        exerciseNotes:"Big Pull!",
        image: ""
    }
];

//function to get my to the top of the screen
const topOfScreen = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


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


// Add exercise to the hidden workout program from exercise example
function addExerciseToWorkout() {
    const exerciseStats = document.getElementById("exercise-stats");
    const exerciseContainer = document.getElementById("program-container");
    const nameElement = exerciseStats?.querySelector("#name");
    const categoryElement = exerciseStats?.querySelector("#category");
    const noteElement = exerciseStats?.querySelector("#exercise-notes");
    const selectedExerciseName = nameElement?.textContent.trim();
    const selectedExerciseCategory = categoryElement?.textContent.trim();
    const selectedExerciseNotes = noteElement?.textContent.trim();
    const programForm = document.getElementById("program-form")

    if (selectedExerciseName) {
        //remove hidden class
        if (programForm.classList.contains("hidden")) {
            programForm.classList.remove("hidden");
        };
        // Exercise info row
        const programRow = document.createElement("div");
        programRow.classList.add("program-row-div");

        // Program info div
        const programInfo = document.createElement("div");
        programInfo.classList.add("program-div");
        programInfo.innerHTML = `
            <h1 class="program-info-h1">${selectedExerciseName}</h1>
            <p class="program-info-category">${selectedExerciseCategory}</p>
            <p class="program-info-notes">${selectedExerciseNotes}</p>
        `;

        // Sets and reps div
        const reps = document.getElementById("reps").value;
        const sets = document.getElementById("sets").value;
        const setsRepsDiv = document.createElement("div");
        setsRepsDiv.classList.add("sets-reps-div");
        setsRepsDiv.innerHTML = `
            ${sets} x ${reps}
        `;

        // Write weight div
        const weightDiv = document.createElement("div");
        weightDiv.classList.add("weight-program-div");
        weightDiv.innerHTML = `
            <h1>Weights</h1>
        `;

        // Add delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("fa", "fa-trash");

        // Straight line to separate exercises
        const line = document.createElement("hr");
        line.classList.add("program-line");

        // This will be for clearing the program row div
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            programRow.remove();
            line.remove();
            //this will be for my delete button to see if any exercises are left
            const remainingExercises = exerciseContainer.querySelectorAll(".program-row-div");
            if (remainingExercises.length === 0) {
                programForm.classList.add("hidden")
            }
        });

        // Create a drag handle (button or area to click)
        const dragHandle = document.createElement("div");
        dragHandle.classList.add("drag-handle");
        dragHandle.innerHTML = "&#x21C5;";
        dragHandle.classList.add("draghandle")

        // Append everything to program div
        programRow.appendChild(dragHandle); 
        programRow.appendChild(programInfo);
        programRow.appendChild(setsRepsDiv);
        programRow.appendChild(weightDiv);
        programRow.appendChild(deleteBtn);

        // Append those divs to the main exercise container div
        exerciseContainer.appendChild(programRow);
        //exerciseContainer.appendChild(line);

        // Handle the drag events only when the drag handle is clicked
        dragHandle.addEventListener("mousedown", (e) => {
            programRow.setAttribute("draggable", "true");
            programRow.classList.add("dragging");

            // Start dragging when the user clicks on the drag handle
            programRow.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", programRow.innerHTML);
            });

            programRow.addEventListener("dragend", () => {
                programRow.classList.remove("dragging");
            });
        });

        // Allow dragging over the container to make it a valid drop target
        exerciseContainer.addEventListener("dragover", (e) => {
            e.preventDefault();
            const dragging = document.querySelector(".dragging");
            const afterElement = getDragAfterElement(exerciseContainer, e.clientY);
            if (afterElement == null) {
                exerciseContainer.appendChild(dragging);
            } else {
                exerciseContainer.insertBefore(dragging, afterElement);
            }
        });

        // Helper function to get the element after which the dragged item should be placed
        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll(".program-row-div:not(.dragging)")];
            return draggableElements.reduce(
                (closest, child) => {
                    const box = child.getBoundingClientRect();
                    const offset = y - box.top - box.height / 2;
                    if (offset < 0 && offset > closest.offset) {
                        return { offset, element: child };
                    } else {
                        return closest;
                    }
                },
                { offset: Number.NEGATIVE_INFINITY }
            ).element;
        }

    } else {
        alert("Please select an exercise first");
    }
}


// Attach the function to the button click event
const addToWorkoutBtn = document.getElementById("workout-btn-add");
addToWorkoutBtn.addEventListener("click", addExerciseToWorkout);


// this will be for clearing the workout container
function clearWorkout() {
    const exerciseContainer = document.getElementById("program-container");
    const programForm = document.getElementById("program-form");

    if (exerciseContainer) {
        exerciseContainer.innerHTML = "";
    } 
    if (exerciseContainer.children.length === 0) {
        programForm.classList.add("hidden");
    }else {
        alert("There is nothing added to your workout");
    }
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearWorkout);
    




//this area will be to when a card is clicked, that the exercises show up in the display
const displayExerciseDetails = (exercise) => {
    const matchedExercise = exercises.find(ex => ex.name === exercise.name);

    if (matchedExercise) {
        // Update the display with exercise details
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
};

//////////////////////////////////////////////////////////////////

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
        exerciseCard.setAttribute("id", "exercise-card")

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
        `;
        //event listener to display exercises
        exerciseCard.addEventListener("click", () => {
            displayExerciseDetails(exercise);
            topOfScreen()
        });

        // Append the exercise card to the container
        upperBodyExercisesContainer.appendChild(exerciseCard);
    });

};

// Call the function to display the upper body exercises
showUpperBodyExercise();


//shows lower body exercises

const lowerBodyExerciseContainer = document.getElementById("lower-body-exercises-container")

const showLowerBodyExercise = () => {

    // Filter exercises by category "lower Body"
    const lowerBodyExercises = exercises.filter(exercise => exercise.category === "Lower Body")

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
                <p class="lower-body-highlight">${exercise.category}</p>
            </div>
            <div class="card-notes-section">
                <p>${exercise.description}</p>
            </div>
    
    `
    exerciseCard.addEventListener("click", () => {
        displayExerciseDetails(exercise);
        topOfScreen()
    });

    lowerBodyExerciseContainer.appendChild(exerciseCard)
})
};
showLowerBodyExercise();

// this is where i will show the popular exercises
const popularExerciseContainer = document.getElementById("popular-exercises-container");

const showPopularExercises = () => {
    const popularExercises = exercises.filter(exercise => exercise.tag === "popular");

    popularExerciseContainer.innerHTML = "";

    popularExercises.forEach(exercise => {
        const exerciseCard = document.createElement("div");
        exerciseCard.classList.add("short-exercise-card");

        exerciseCard.innerHTML = ` <h1>${exercise.name}</h1>
            <div class="image-container">
                <img src="${exercise.image}" alt="${exercise.name} image">
            </div>
            <div class="highlight">
                <p class="lower-body-highlight">${exercise.category}</p>
            </div>
            <div class="card-notes-section">
                <p>${exercise.description}</p>
            </div>`

        //event listener to display exercises
        exerciseCard.addEventListener("click", () => {
            displayExerciseDetails(exercise);
            topOfScreen()
        });

            popularExerciseContainer.appendChild(exerciseCard)
    })
}

showPopularExercises()


