

document.getElementById("button").addEventListener("click",colors);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  
function colors() {
const colors = ["#F15025", "Green", "Rgba(133,122,200)","Red"];
let x = getRndInteger(0, 3);
let chosen_color = colors[x]
document.getElementById("color_code").innerHTML = chosen_color;
document.getElementById("main").style.backgroundColor = chosen_color;

}


