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

