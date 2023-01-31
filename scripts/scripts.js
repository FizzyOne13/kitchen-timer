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

function showShow() {
  document.getElementById("LRopen").style.visibility = "visible";
}

function openLRblock() {
  document.getElementById("LRblock").style.visibility = "visible";
  document.getElementById("LRopen").style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  let modal = document.getElementById("logForm");
  if (event.target == modal) {
    closeLog();
  }
};
