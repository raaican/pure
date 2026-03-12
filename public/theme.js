if (localStorage.getItem('dark_mode') === null) {
    document.documentElement.setAttribute("data-webtui-theme", "catppuccin-mocha");
} else if (localStorage.getItem('dark_mode') === 'true') {
    document.documentElement.setAttribute("data-webtui-theme", "catppuccin-mocha");
} else {
    document.documentElement.setAttribute("data-webtui-theme", "catppuccin-latte");
};

const on_switch = () => {
    const switch_state = document.querySelector('#switch');
    if (switch_state.checked) {
        localStorage.setItem('dark_mode', "true");
        document.documentElement.setAttribute("data-webtui-theme", "catppuccin-mocha")
    } else {
        localStorage.setItem('dark_mode', "false");
        document.documentElement.setAttribute("data-webtui-theme", "catppuccin-latte")
    };
};

