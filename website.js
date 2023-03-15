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
  let rot = Math.floor(Math.random() * 360);

  document.body.style.backgroundImage = "url('images/elmo.gif')";
  var imgs = document.getElementsByTagName("img");
  for (var i = 0, l = imgs.length; i < l; i++) {
    imgs[i].src = "images/elmo.gif";
  }

  btn.style.position = "fixed";
  btn.style.left = `${vert}px`;
  btn.style.top = `${horiz}px`;
  btn.rotate(`${rot}`);
}

function playsound() {
  var audio = new Audio("images/yipee.mp3");
  audio.play();
}
