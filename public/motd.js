function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

const messages = ["POGOMEGA", "DONT PRESS F12 PLS", "JS IS WEIRD", "PLAY ZZZ", "I USE NEOVIM BTW", "I USE ARCH BTW", "NOT SMART ENOUGH TO CHOOSE A STABLE DISTRO"];
document.getElementById("motd").innerHTML = messages[getRandomInt(messages.length)];

var i = 1;
function loopage() {
  setTimeout(function() {
    document.getElementById("motd").innerHTML = messages[getRandomInt(messages.length)];
    i++;
    loopage()
  }, 10000)
}

loopage();
