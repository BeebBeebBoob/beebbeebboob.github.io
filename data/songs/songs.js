
fetch("songs.json").then(response => response.json()).then(json => shit(json));

function Rando() {
    return ((Math.random()-0.5)*2).toPrecision(2);
  }

function shit(songs){
    for (var i=0 ; i < songs.list.length ; i++){
        lefting = '<p style="left:' + Rando()+'vh;">'
        document.getElementById("songs").innerHTML = document.getElementById("songs").innerHTML + lefting + songs.list[i]['song'] + "</p>";
    }
}


