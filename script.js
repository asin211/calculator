let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}
function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid numbers");
  }
}
function Clear() {
  outputScreen.value = "";
}
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function PlusMinus() {
  if (outputScreen.value[0] === "-") {
    outputScreen.value;
  }
  else {
    outputScreen.value = "-" + outputScreen.value;
  }

}


const closeBtn = document.querySelector(".close-btn");

function Close() {
  document.querySelector(".thank").classList.remove("hidden");
  // document.querySelector(".thank").classList.add("hidden");
}
closeBtn.addEventListener("click", Close);

document.querySelector(".hidden").style.cssText =
  "box-shadow: 2px 5px 30px red";
