if (localStorage.getItem('dark_mode') === null) {
    document.getElementById("switch").checked = true;
} else if (localStorage.getItem('dark_mode') === 'true') {
    document.getElementById("switch").checked = true;
} else {
    document.getElementById("switch").checked = false;
};
