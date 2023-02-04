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
