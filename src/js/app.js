import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let elements = document.querySelector(".price");
    elements.forEach(function (el) {
        if (el.classList.contains("hot")) {
            el.innerHTML += "&#128293";
        }
    });
});
