

// Find the dark mode button
const themeButton = document.getElementById("themeButton");

// Listen for button clicks
themeButton.addEventListener("click", function () {

    // Toggle dark mode on and off
    document.body.classList.toggle("dark");

});

