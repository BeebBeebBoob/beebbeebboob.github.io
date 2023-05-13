var lang_ru=true;

function toggle(){
    lang_ru=!lang_ru;
    if(lang_ru){
        document.getElementById("lang").innerHTML="РУС";
        document.getElementById('spinner')
        .innerHTML="ДОБРО ПОЖАЛОВАТЬ В МОРЕ";
        document.getElementById("welcome").innerHTML="Подводный мир";
        document.getElementById("text").innerHTML="Место куда я буду скидывать всякию чушь. Почему? Прост :)";
    }else{
        document.getElementById("lang").innerHTML="ENG";
        document.getElementById('spinner')
        .innerHTML="WELCOME TO THE SEA";
        document.getElementById("welcome").innerHTML="underwater world";
        document.getElementById("text").innerHTML="Place to drop my stuff into. Why? Why not :)";
    }
}