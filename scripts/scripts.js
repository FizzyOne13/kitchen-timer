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

//

function switchToBlue() {
  document.getElementById("set-blue").checked = true;
  document.getElementById("set-green").checked = false;
  document.getElementById("set-yellow").checked = false;
  document.getElementById("set-red").checked = false;
  scheme();
}
function switchToGreen() {
  document.getElementById("set-blue").checked = false;
  document.getElementById("set-green").checked = true;
  document.getElementById("set-yellow").checked = false;
  document.getElementById("set-red").checked = false;
  scheme();
}
function switchToYellow() {
  document.getElementById("set-blue").checked = false;
  document.getElementById("set-green").checked = false;
  document.getElementById("set-yellow").checked = true;
  document.getElementById("set-red").checked = false;
  scheme();
}
function switchToRed() {
  document.getElementById("set-blue").checked = false;
  document.getElementById("set-green").checked = false;
  document.getElementById("set-yellow").checked = false;
  document.getElementById("set-red").checked = true;
  scheme();
}

const switchTransp = document.querySelector("#transp");
switchTransp.addEventListener("change", scheme, false);
function scheme() {
  if (switchTransp.checked) {
    if (document.getElementById("set-blue").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgba(99, 148, 212, 0.2)";
    } else if (document.getElementById("set-green").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgba(99, 208, 212, 0.2)";
    } else if (document.getElementById("set-yellow").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgba(204, 216, 91, 0.2)";
    } else if (document.getElementById("set-red").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgba(216, 124, 91, 0.2)";
    }
  } else {
    if (document.getElementById("set-blue").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgb(99, 148, 212)";
    } else if (document.getElementById("set-green").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgb(99, 208, 212)";
    } else if (document.getElementById("set-yellow").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgb(204, 216, 91)";
    } else if (document.getElementById("set-red").checked == true) {
      let body = document.getElementById("body");
      body.style.backgroundColor = "rgb(216, 124, 91)";
    }
  }
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
