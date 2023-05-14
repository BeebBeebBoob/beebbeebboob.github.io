var writing = false;
var lang_ru=true;

var answers;
fetch("faq.json").then(response => response.json()).then(json => answers = json);

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("inp")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key == 'Enter') {
            search(document.getElementById("inp").value);
        }
    })
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
            result = answers.list[i];
            break;
        }
    }
    document.getElementById("typo").insertAdjacentHTML("beforeend", ">>"+srch_input+"<br>");
    document.getElementById("inp").value = "";

    if(srch_input === 'back'){
        window.location = '..';
        return
    }
    if(srch_input === "clear"){
        document.getElementById('typo').innerHTML = "";
        return
    }
    if(srch_input === "lang"){
        lang_ru=!lang_ru;
        if(lang_ru){
            write("Language changed >>> РУС.")
        }else{
            write("Language changed >>> ENG.")
        }
        return
    }
    if(result===null){
        writing=true;
        write("Unknown query. Try 'help'.")
    }else{
        writing=true;
        if(lang_ru){
            if(result['answer_ru'] && Object.keys(result['answer_ru']).length != 0){
                write(result['answer_ru'])
            }else{
                redirecting(result['answer_en']);
            }
        }else{
            if(result['answer_en'] && Object.keys(result['answer_en']).length != 0){
                write(result['answer_en'])
            }else{
                redirecting(result['answer_ru']);
            }
        }
    }
}

function redirecting(other_answer) {
    var index = 0;
    var text;
    if(lang_ru){
        text = "Not Found: Answer RUS. Redirecting to Answer ENG..."
    }else{
        text = "Not Found: Answer ENG. Redirecting to Answer RUS..."
    }
    var end = text.length;
    var ID;
    var para;

    var print = function print(){
        if(index===0){
            para = document.createElement("p");
            para.style.color = 'red';
            
            document.getElementById("typo").appendChild(para);
        }
        if(index===end){
            write(other_answer);
            clearInterval(ID);
        }
        else{
            para.innerHTML = para.innerHTML + text[index];
            document.getElementById("typo").appendChild(para);
            index++;
        }
    }
    ID = setInterval(print, 15);
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
