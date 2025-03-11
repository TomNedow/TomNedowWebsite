const searchBtn = document.getElementById('search-icon-btn')

// to show search bar 

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const searchInput = document.getElementById("search-input")
    const searchBarForm = document.getElementById("search-bar")

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

//testimonal container

const reviewerContainer = document.getElementById("testimonal-container")
const h1Name = document.getElementById("title-testimonal")
const h2job = document.getElementById("job-testimonal")
const nextBtn = document.getElementById("next")
const previousBtn = document.getElementById("previous")

const testimonal = [
    {
        name: "tom",
        job: "fitness trainer",
    },
    {
        name: "Sam",
        job: "HR of girlies inc",
    },
    {
        name: "Ella",
        job: "Athlete",
    },
    {
        name: "Catsby",
        job: "nutritionist",
    },
]

let currentIndex = 0;

function updateReviewer(){
    h1Name.textContent = testimonal[currentIndex].name;
    h2job.textContent = testimonal[currentIndex].job;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < testimonal.length -1){
        currentIndex++
    } else {
        currentIndex = 0;
    }
    updateReviewer()
})

previousBtn.addEventListener("click", () => {
    if (currentIndex > 0){
        currentIndex--
    } else {
        currentIndex = testimonal.length -1;
    }
    updateReviewer()
})

updateReviewer()