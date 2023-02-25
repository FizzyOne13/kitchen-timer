//opening and closing log|reg from, closing whole form to button, opening it up again
function openLog() {
  document.getElementById("logForm").style.display = "block";
}

function openReg() {
  document.getElementById("regForm").style.display = "block";
}

function closeLog() {
  document.getElementById("logForm").style.display = "none";
}

function closeReg() {
  document.getElementById("regForm").style.display = "none";
}

function closeLRblock() {
  document.getElementById("LRblock").style.visibility = "hidden";
  showShow();
}

function closeLblock() {
  document.getElementById("LRblock").style.visibility = "visible";
  closeLog();
}

function closeRblock() {
  document.getElementById("LRblock").style.visibility = "visible";
  closeReg();
}

function showShow() {
  document.getElementById("LRopen").style.visibility = "visible";
}

function openLRblock() {
  document.getElementById("LRblock").style.visibility = "visible";
  document.getElementById("LRopen").style.visibility = "hidden";
}

//switching between log and reg
let not = document.getElementsByClassName("not");
not[0].addEventListener("click", function goToReg() {
  closeLog();
  openReg();
});

let already = document.getElementsByClassName("already");
already[0].addEventListener("click", function goToLog() {
  closeReg();
  openLog();
});

//three header icons opening and closing
function openPalette() {
  document.getElementById("paletteForm").style.display = "block";
}

function openScheme() {
  document.getElementById("schemeForm").style.display = "block";
}

function openSettings() {
  document.getElementById("settingsForm").style.display = "block";
}

function closePalette() {
  document.getElementById("paletteForm").style.display = "none";
}

function closeScheme() {
  document.getElementById("schemeForm").style.display = "none";
}

function closeSettings() {
  document.getElementById("settingsForm").style.display = "none";
}
//page sizing and footer placement depending on quantaty of timers and device
const body = document.getElementById("body");
const header = document.getElementById("head");
const foot = document.getElementById("foot");
const root = document.documentElement;
window.onload = function getCentrHeight() {
  const centrCont = document.querySelector(".central-container");
  const currentCentrHight = centrCont.offsetHeight;
  console.log(currentCentrHight);
  body.style.setProperty(
    "height",
    "calc(currentCentrHight + (--centralContrTopMarg)  + (--minBotMarg))"
  );
  root.style.setProperty("--footerTopMarg", currentCentrHight + 450 + "px");
  foot.style.marginTop =
    "calc(currentCentrHight + (--centralContrTopMarg) + (--minBotMarg))";
};

//color schemes switching

const colortheme = {
  blue: {
    "--bold-color": "rgb(7, 94, 114)",
    "--lighter-color": "rgb(97, 245, 225)",
    "--background-color": "rgb(99, 208, 212)",
  },
  green: {
    "--bold-color": "rgb(7, 114, 59)",
    "--lighter-color": "rgb(122, 206, 242)",
    "--background-color": "rgb(99, 148, 212)",
  },
  yellow: {
    "--bold-color": "rgb(154, 154, 2)",
    "--lighter-color": "rgb(239, 232, 132)",
    "--background-color": "rgb(204, 216, 91)",
  },
  red: {
    "--bold-color": "rgb(154, 27, 2)",
    "--lighter-color": "rgb(239, 166, 141)",
    "--background-color": "rgb(216, 124, 91)",
  },
};

const transptheme = {
  trblue: {
    "--bold-color": "rgb(7, 94, 114)",
    "--lighter-color": "rgb(97, 245, 225)",
    "--background-color": "rgba(99, 208, 212, 0.2)",
  },
  trgreen: {
    "--bold-color": "rgb(7, 114, 59)",
    "--lighter-color": "rgb(122, 206, 242)",
    "--background-color": "rgba(99, 148, 212, 0.2)",
  },
  tryellow: {
    "--bold-color": "rgb(154, 154, 2)",
    "--lighter-color": "rgb(239, 232, 132)",
    "--background-color": "rgba(204, 216, 91, 0.2)",
  },
  trred: {
    "--bold-color": "rgb(154, 27, 2)",
    "--lighter-color": "rgb(239, 166, 141)",
    "--background-color": "rgba(216, 124, 91, 0.2)",
  },
};

function switchToBlue() {
  document.getElementById("logotype").style.color = "rgb(7, 94, 114)";
  document.getElementById("head").style.backgroundColor = "rgb(122, 206, 242)";
  document.getElementById("body").style.backgroundColor = "rgb(99, 148, 212)";
  document.getElementById("foot").style.backgroundColor = "rgb(7, 94, 114)";
}

function switchToGreen() {
  document.getElementById("logotype").style.color = "rgb(7, 114, 59)";
  document.getElementById("head").style.backgroundColor = "rgb(97, 245, 225)";
  document.getElementById("body").style.backgroundColor = "rgb(99, 208, 212)";
  document.getElementById("foot").style.backgroundColor = "rgb(7, 114, 59)";
}

function switchToYellow() {
  document.getElementById("logotype").style.color = "rgb(154, 154, 2)";
  document.getElementById("head").style.backgroundColor = "rgb(239, 232, 132)";
  document.getElementById("body").style.backgroundColor = "rgb(204, 216, 91)";
  document.getElementById("foot").style.backgroundColor = "rgb(154, 154, 2)";
}

function switchToRed() {
  document.getElementById("logotype").style.color = "rgb(154, 27, 2)";
  document.getElementById("head").style.backgroundColor = "rgb(239, 166, 141)";
  document.getElementById("body").style.backgroundColor = "rgb(216, 124, 91)";
  document.getElementById("foot").style.backgroundColor = "rgb(154, 27, 2)";
}

//timer adding and checking if placeholders are set to default because of using NodeCopy
const centrGrid = document.querySelector(".central-container");
const getTimer = document.querySelector(".window-timer");
function addTimer() {
  const timerDiv = getTimer.cloneNode(true);
  var n = centrGrid.childElementCount;
  timerDiv.id = "timer" + n;
  centrGrid.insertBefore(timerDiv, centrGrid.children[n - 1]);
  var lastTimer = document.getElementById("timer" + n);
  lastTimer.querySelector(".title-bar").value = "";
  lastTimer
    .querySelector(".title-bar")
    .setAttribute("placeholder", "Your title");
  lastTimer.querySelector(".timer-bar").value = "";
  lastTimer.querySelector(".timer-description").value = "";
  lastTimer
    .querySelector(".timer-description")
    .setAttribute("placeholder", "Here you can leave a short hint");
}

const tr = document.getElementById("transp");

function transpOn() {
  if (tr.checked) {
    var currentColour = document.getElementById("body").style.backgroundColor;
    if (currentColour == "rgb(99, 148, 212)") {
      //blue
      body.setAttribute("background-color", "rgba(99, 148, 212, 0.2)");
      alert("it works!");
    } else if (currentColour == "rgb(99, 208, 212)") {
      //green
      body.setAttribute("background-color", "rgba(99, 208, 212, 0.2)");
      alert("it works!");
    } else if (currentColour == "rgb(204, 216, 91)") {
      //yellow
      body.setAttribute("background-color", "rgba(204, 216, 91, 0.2)");
      alert("it works!");
    } else if (currentColour == "rgb(216, 124, 91)") {
      //red
      body.setAttribute("background-color", "rgba(216, 124, 91, 0.2)");
      alert("it works!");
    }
  } else {
    document.body.style.backgroundColor = "rgb(216, 124, 91)";
    alert("it's cursed!");
  }
}
