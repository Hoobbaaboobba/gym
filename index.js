const sb = document.getElementById("sb");
const vs = document.getElementById("vs");
const pn = document.getElementById("pn");
const vt = document.getElementById("vt");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

function firstButton() {
  sb.style.display = "flex";
  vs.style.display = "none";
  pn.style.display = "none";
  vt.style.display = "none";
  btn1.style.background = "#fff200";
  btn2.style.background = "white";
  btn3.style.background = "white";
  btn4.style.background = "white";
}

function secondButton() {
  sb.style.display = "none";
  vs.style.display = "flex";
  pn.style.display = "none";
  vt.style.display = "none";
  btn1.style.background = "white";
  btn2.style.background = "#fff200";
  btn3.style.background = "white";
  btn4.style.background = "white";
}

function thirdButton() {
  sb.style.display = "none";
  vs.style.display = "none";
  pn.style.display = "flex";
  vt.style.display = "none";
  btn1.style.background = "white";
  btn2.style.background = "white";
  btn3.style.background = "#fff200";
  btn4.style.background = "white";
}

function fourthButtun() {
  sb.style.display = "none";
  vs.style.display = "none";
  pn.style.display = "none";
  vt.style.display = "flex";
  btn1.style.background = "white";
  btn2.style.background = "white";
  btn3.style.background = "white";
  btn4.style.background = "#fff200";
}
