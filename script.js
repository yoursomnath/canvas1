let c = document.getElementById("canvas");

c.style.background = "black";
var ctx = c.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
c.style.width = `${innerWidth}px`;
c.style.height = `${innerHeight}px`;
c.style.height = window.innerHeight;
  setInterval(make,10);
  function make(){
    let ran1 = Math.floor(Math.random()*width);
    let ran2 = Math.floor(Math.random()*height);
    let ran3 = Math.floor(Math.random()*10);
    let ran4 = Math.floor(Math.random()*10);
    let ranR = Math.floor(Math.random()*255);
    let ranG = Math.floor(Math.random()*255);
    let ranB = Math.floor(Math.random()*255);
    ctx.fillRect(ran1,ran2,ran3,ran4);
    ctx.fillStyle = `rgb(${ranR},${ranG},${ranB})`;
  }
c.addEventListener("mousemove", remove);

