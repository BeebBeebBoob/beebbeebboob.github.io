var writing = false;
var language = window.navigator.userLanguage || window.navigator.language;
var urlParams = new URLSearchParams(window.location.search);
var Param = urlParams.get('q');
var lang_ru;
if(language == "ru-RU" || language == "ru"){
	lang_ru=true;
}else{
	lang_ru=false;
};

var answers;
fetch("faq.json").then(response => response.json()).then(json => answers = json).then(answers_value => {
    if (Param){
        search(Param);
    }else{
        write("Press Tab or screen then type 'help' to begin.\nНажмите Tab или на экран, и потом напишите 'help' чтобы приступить.\n");
    };
});

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("focusing").onclick = function () { document.getElementById("inp").focus(); document.getElementById("inp").select();};
    document.getElementById("inp")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key == 'Enter') {
            search(document.getElementById("inp").value);
        }
    })
});

function focus(){
    document.getElementById("inp").focus();
    document.getElementById("inp").select();
}

function search(srch_input){
    if(writing){
        return null
    }
    if(!srch_input){
        document.getElementById("typo").insertAdjacentHTML("beforeend", ">><br>")
        return null
    }else{
        srch_input = srch_input.replace(/\s+/g, '');
        srch_input = srch_input.toLowerCase();
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

    if(srch_input === "back"){
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
    if(srch_input === ""){
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
    ID = setInterval(print, 10);
} 

function write(text){
    var index = 0;
    var end = text.length;
    var ID;
    var para;
    var para_text = "";
    var para_valid = true;
        
    var print = function print(){
        if(index===end){ //The end of cycle
            document.getElementById("typo").innerHTML = document.getElementById("typo").innerHTML + "<br>";
            writing=false;
            clearInterval(ID);
        }
        else{
            document.getElementById("typo").innerHTML = document.getElementById("typo").innerHTML + text[index];
            if(text[index]==="["){ // sauce
                index++ // after [
                para_valid = true;
                para = document.createElement("a");
                para_text = "";
                for (index; text[index] != "]"; index++){
                    if(text[index]===" "){ // Oh oh, Spacey!
                        para_valid = false;
                        break
                    };
                    para_text += text[index];
                } 
                if(para_valid){
                    let re = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})(\:[0-9]{4})?/;
                    if(re.test(para_text)){
                        para.href = para_text
                    }else{
                        para.href = "javascript:search('" + para_text + "');"
                    };
                    para.innerText = para_text;
                    document.getElementById("typo").appendChild(para);
                }else{
                    document.getElementById("typo").innerHTML = document.getElementById("typo").innerHTML + para;
                }
                return
                // 01[345]78
                // index now is 2, find index of ]
                // 2 and 6 we get. so we just type in all <a> stuff and add to index var = (6-2)
                // para.href = "javascript:search('" + a + "');"
                // OR
                // If we have spacebar, we will break the code in for cycle and make para_valid FALSE
                // So para element won't be added
            }
            index++;
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
    ID = setInterval(print, 12); // Recalls with delay in milisecs
}
