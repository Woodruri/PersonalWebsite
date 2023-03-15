var winW = window.innerWidth;
var winH = window.innerHeight;
//console.log(`height = ${winH}, Width = ${winW}`);

addEventListener("resize", (event) => {
  var winW = window.innerWidth;
  var winH = window.innerHeight;
  //console.log(`height = ${winH}, Width = ${winW}`);
});

function secret() {
  playsound();
  let btn = document.getElementById("uhoh");
  let vert = Math.floor(Math.random() * winW);
  let horiz = Math.floor(Math.random() * winH);

  btn.style.position = "fixed";
  btn.style.left = `${vert}px`;
  btn.style.top = `${horiz}px`;
}

function playsound() {
  var audio = new Audio("images/yipee.mp3");
  audio.play();
}
