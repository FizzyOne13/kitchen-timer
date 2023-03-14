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
  body.style.setProperty(
    "height",
    "calc(currentCentrHight + (--centralContrTopMarg)  + (--minBotMarg))"
  );
  root.style.setProperty("--footerTopMarg", currentCentrHight + 450 + "px");
  foot.style.marginTop =
    "calc(currentCentrHight + (--centralContrTopMarg) + (--minBotMarg))";
};

//color schemes switching

//just switching between 4 color options
var store = document.querySelector(":root");
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

//checking if toggled transperency option and enabling transperent background
const switchTransp = document.querySelector("#transp");
switchTransp.addEventListener("change", scheme, false);
function scheme() {
  if (switchTransp.checked) {
    if (document.getElementById("set-blue").checked == true) {
      store.style.setProperty("--bold-color", "rgb(7, 94, 114)");
      store.style.setProperty("--lighter-color", "rgb(122, 206, 242)");
      store.style.setProperty("--background-color", "rgba(99, 148, 212, 0.2)");
    } else if (document.getElementById("set-green").checked == true) {
      store.style.setProperty("--bold-color", "rgb(7, 114, 59)");
      store.style.setProperty("--lighter-color", "rgb(97, 245, 225)");
      store.style.setProperty("--background-color", "rgba(99, 208, 212, 0.2)");
    } else if (document.getElementById("set-yellow").checked == true) {
      store.style.setProperty("--bold-color", "rgb(154, 154, 2)");
      store.style.setProperty("--lighter-color", "rgb(239, 232, 132)");
      store.style.setProperty("--background-color", "rgba(204, 216, 91, 0.2)");
    } else if (document.getElementById("set-red").checked == true) {
      store.style.setProperty("--bold-color", "rgb(154, 27, 2)");
      store.style.setProperty("--lighter-color", "rgb(239, 166, 141)");
      store.style.setProperty("--background-color", "rgba(216, 124, 91, 0.2)");
    }
  } else {
    if (document.getElementById("set-blue").checked == true) {
      store.style.setProperty("--bold-color", "rgb(7, 94, 114)");
      store.style.setProperty("--lighter-color", "rgb(122, 206, 242)");
      store.style.setProperty("--background-color", "rgba(99, 148, 212)");
    } else if (document.getElementById("set-green").checked == true) {
      store.style.setProperty("--bold-color", "rgb(7, 114, 59)");
      store.style.setProperty("--lighter-color", "rgb(97, 245, 225)");
      store.style.setProperty("--background-color", "rgb(99, 208, 212)");
    } else if (document.getElementById("set-yellow").checked == true) {
      store.style.setProperty("--bold-color", "rgb(154, 154, 2)");
      store.style.setProperty("--lighter-color", "rgb(239, 232, 132)");
      store.style.setProperty("--background-color", "rgb(204, 216, 91)");
    } else if (document.getElementById("set-red").checked == true) {
      store.style.setProperty("--bold-color", "rgb(154, 27, 2)");
      store.style.setProperty("--lighter-color", "rgb(239, 166, 141)");
      store.style.setProperty("--background-color", "rgb(216, 124, 91)");
    }
  }
}

//toggling switch to 2 columns of timers instead of default 3
const setPopup = document.getElementById("3to2");
function twoC() {
  if (setPopup.checked) {
    store.style.setProperty("--columns-central", "1fr 1fr 1fr");
  } else {
    store.style.setProperty("--columns-central", "1fr 1fr");
  }
}

//setting id of default drawn timers
const centrGrid = document.querySelector(".central-container");
const getTimer = document.querySelector(".window-timer");
const timerText = getTimer.querySelector(".timer-description");

document.onload = idSet();
function idSet() {
  const childs = centrGrid.children;
  for (i = 0; i < childs.length - 1; i++) {
    centrGrid.children[i].setAttribute("id", "timer" + (i + 1));
  }
  centrGrid.lastElementChild.setAttribute("id", "create-new");
  for (i = 0; i < childs.length - 1; i++) {
    centrGrid.children[i]
      .querySelector(".close-timer")
      .setAttribute("id", "close" + (i + 1));
    centrGrid.children[i]
      .querySelector(".timer-description")
      .setAttribute("id", "area" + (i + 1));
  }
}

//timer adding
function addTimer() {
  const timerDiv = getTimer.cloneNode(true);
  var n = centrGrid.childElementCount;
  timerDiv.id = "timer" + n;
  timerText.id = "area" + n;
  centrGrid.insertBefore(timerDiv, centrGrid.children[n - 1]);
  var lastTimer = document.getElementById("timer" + n);
  //var lastArea = document.getElementById("area" + n);
  //lastTimer.querySelector(".title-bar").value = "";
  lastTimer
    .querySelector(".title-bar")
    .setAttribute("placeholder", "Your title");
  // lastTimer.querySelector(".timer-bar").value = "";
  // lastTimer.querySelector(".timer-description").value = "";
  lastTimer
    .querySelector(".timer-description")
    .setAttribute("placeholder", "Here you can leave a short hint");
  letsGo();
}

//removing timer onclick
function delTimer(btn) {
  let idOf = btn.id;
  let t = document.getElementById(idOf);
  let getPar = t.parentElement;
  let centr = document.querySelector(".central-container");
  centr.removeChild(getPar);
  idSet();
}

//let getValue = () => qq.getAttribute("value");
var y = document.getElementById("time1");
function setTime() {
  //const t = qq.getAttribute("input").value;
  //console.log(t);
  //var y = document.getElementById("time1");
  //var yy = y.querySelector(".timer");
  var a = y.getComputedStyle("::-webkit-datatime-edit");
  //var qqq = q.getElementsByClassName("-webkit-datetime-edit-hour-field");
  // var g = qqq.getAttribute("aria-valuetext");
  console.log(a);
}

//remaining characters in text-areas
let textAreas = document.querySelectorAll(".timer-description");
const CharCount = document.querySelector(".timer-description-chars-left");
let clickEvent = (item) => {
  const target = item.nextElementSibling;
  //console.log(item);
  //console.log(target);
  const MaxChars = item.getAttribute("maxlength");
  const CurChars = item.value.length;
  const CharsLeft = MaxChars - CurChars;
  const colorRed = CharsLeft <= MaxChars * 0.1 ? "red" : null;
  target.textContent = `${CharsLeft} characters remaining`;
  target.style.color = colorRed;
};
function letsGo() {
  textAreas.forEach((item) => {
    item.addEventListener("input", clickEvent(item));
  });
}
