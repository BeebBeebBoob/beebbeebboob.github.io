
fetch("songs.json").then(response => response.json()).then(json => shit(json));

function Rando() {
    return ((Math.random()-0.5)*8).toPrecision(2);
  }

function shit(songs){
    for (var i=0 ; i < songs.list.length ; i++){
        lefting = '<p style="left:' + Rando()+'vh;">'
        document.getElementById("songs").innerHTML = document.getElementById("songs").innerHTML + lefting + songs.list[i]['song'] + "</p>";
    }
}
function startShowing(){
    var elementToHide = document.getElementById("cookie");
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 1)
        {
        clearInterval(intervalId);
        }else{
        elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.1;
        }
    },1000);
}

window.addEventListener("DOMContentLoaded", (event) => {
    startShowing();
});