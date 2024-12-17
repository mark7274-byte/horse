// Scroll to the respective sections on button click
document.getElementById("section1-btn").addEventListener("click", function () {
    document.getElementById("travel-options").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("section2-btn").addEventListener("click", function () {
    document.getElementById("signing-form").scrollIntoView({
        behavior: "smooth"
    });
});