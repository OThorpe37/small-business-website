const headlineInput = document.getElementById("headlineInput");
const updateButton = document.getElementById("update-cta-btn");
const ctaheadline = document.getElementById("cta");

updateButton.addEventListener("click", function() {
    const newheadline = headlineInput.value;
    if (newheadline !== "") {
        ctaheadline.textContent = newheadline;
    } else {
        alert("Please enter a headline before updating.");
    }
});