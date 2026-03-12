if (localStorage.getItem('dark_mode') == 'true'){
    console.log("is dark");
    document.documentElement.setAttribute("data-webtui-theme", "catppuccin-mocha");
} else {
    console.log("is not dark");
    console.log(localStorage.getItem('dark_mode'));
    document.documentElement.setAttribute("data-webtui-theme", "catppuccin-latte");
};

const on_switch = () => {
    const switch_state = document.querySelector('#switch');
    if (switch_state.checked === true) {
        localStorage.setItem('dark_mode', true);
        document.documentElement.setAttribute("data-webtui-theme", "catppuccin-mocha")
    } else {
        localStorage.setItem('dark_mode', false);
        document.documentElement.setAttribute("data-webtui-theme", "catppuccin-latte")
    };
};

