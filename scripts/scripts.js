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

let colorDef = document.getElementById("palette-call");
colorDef.addEventListener("click", function defColorCheck() {
  if (document.getElementById(blue).style.backgroundColor != "blue") {
    document.getElementById(blue).style.backgroundColor == "blue";
  }
});

var footerPlace = document.getPropertyValue("--footerPlacing");
var footerHeight = document.getElementById("foot").style.minHeight;
document.getElementById("foot").style.marginTop =
  "calc(footerPlace - footerHeight)";

var widthFooter = document.getPropertyValue();
var spaceBetween = (document.querySelector(".col-1").style.marginRight =
  "calc(");

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
