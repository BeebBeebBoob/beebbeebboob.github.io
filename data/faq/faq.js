var writing = false;

var answers;
fetch("faq.json").then(response => response.json()).then(json => answers = json);

document.getElementById("inp")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key == 'Enter') {
        search(document.getElementById("inp").value);
    }
});

function search(srch_input){
    if(writing){
        return null
    }
    if(!srch_input){
        document.getElementById("typo").insertAdjacentHTML("beforeend", ">><br>")
        return null
    }
    var result = null;
    for (var i=0 ; i < answers.list.length ; i++){
        if (answers.list[i]['question'] == srch_input) {
            result = answers.list[i]['answer'];
            break;
        }
    }
    document.getElementById("typo").insertAdjacentHTML("beforeend", ">>"+srch_input+"<br>");
    document.getElementById("inp").value = "";

    if(srch_input === 'back'){
        window.location = '..';
        return
    }
    if(result===null){
        writing=true;
        write("Unknown query. Try 'help'.")
    }else{
        writing=true;
        write(result)
    }
}


function write(text){
    var index = 0;
    var end = text.length;
    var ID;
        
    var print = function print(){
        if(index===end){
            document.getElementById("typo").innerHTML = document.getElementById("typo").innerHTML + "<br>";
            writing=false;
            clearInterval(ID);
        }
        else{
            document.getElementById("typo").innerHTML = document.getElementById("typo").innerHTML + text[index];
            index++;
        }
    }
    ID = setInterval(print, 15);
}
