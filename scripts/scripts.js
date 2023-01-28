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
  document.getElementById("LRblock").style.display = "none";
  showShow();
}

function showShow() {
  document.getElementById("LRopen").style.display = "block";
}

function openLRblock() {
  document.getElementById("LRbblock").style.display = "block";
}

const greenCross = document.getElementById("LRblock");

greenCross.addEventListener("click", function handleClick(event) {
  event.target.remove();
});
