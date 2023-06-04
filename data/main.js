var language = window.navigator.userLanguage || window.navigator.language;
var lang_ru;
if(language == "ru-RU" || language == "ru"){
	lang_ru=false;
}else{
	lang_ru=true;
}; // Yes. It's flipped just to update the site.

window.addEventListener("DOMContentLoaded", (event) => {
    toggle();
});

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

