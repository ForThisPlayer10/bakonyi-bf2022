document.getElementById("gyurustext").style.opacity = 0;
document.getElementById("bencetext").style.opacity = 0;   //ez egy szar
document.getElementById("denestext").style.opacity = 0;
let pics = ["src_elso/tajkep.jpg", "src_elso/tajkep_2.jpg", "src_elso/tajkep_3.jpg", "src_elso/tajkep_4.jpg", "src_elso/tajkep_5.jpg"];

function toggleText(text){
    let x = document.getElementById(text);
    x.style.opacity == 0 ? x.style.opacity = 1: x.style.opacity = 0;
}

let count = 0;
function next() {
  let pic = document.getElementById("slideshow");
  pic.classList.add("fadeout");
  
  pic.addEventListener("animationend", ()=>{
    pic.classList.remove("fadeout");
    pic.src = pics[count];});

  count++;
  pic.classList.add("fadein");
  pic.addEventListener("animatinoend", ()=>{pic.classList.remove("fadein")});
  
  if(count == pics.length) count = 0;
}

setInterval(function(){ refresh() }, 500);
function refresh() {
    const d = new Date();
    document.getElementById("date").innerHTML = "Aktuális idő: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();  //d.toLocaleTimeString();
}
