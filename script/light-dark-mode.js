/* Light mode / Dark mode */
const aside = document.querySelector("aside");
const header = document.querySelector("header");
const mode = document.getElementById("switch-mode-btn");

let nightMode = false;

const switchMode = () => {
    nightMode = !nightMode;
    if (nightMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#fff";
        mode.textContent = "Light Mode";
        header.style.backgroundColor = "#2d3436";
        //header.style.boxShadow = "none";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "black";
        mode.textContent = "Dark Mode";
        header.style.backgroundColor = "#dfe6e9";
        header.style.boxShadow = "0 4px 2px -2px rgba(0, 0, 0, 0.2)";
    }
}

document.getElementById("switch-mode-btn").addEventListener("click", switchMode);