const overlay = document.getElementById("ahh-monitor");

function checkResolution() {
    if (window.innerWidth <= 981 || window.innerHeight < 705) {
        overlay.style.display = "flex";
        console.error("Screen resolution is too low. Expected at least 982 x 705");
    } else {
        overlay.style.display = "none";
    }
}

checkResolution();

window.addEventListener("resize", checkResolution);
