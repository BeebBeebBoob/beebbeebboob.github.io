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
        document.getElementById('lang')
        .innerHTML="РУС";
        document.getElementById('main_content')
        .innerHTML="Йоу\n \
        Привет! Добро пожаловать в мой уголок! Мир Beeb!\n \
        Сейчас мало что здесь есть. Сайт только появился...\n \
        Но уверен что скоро тут будет что-то. Точно-точно! Главное чтобы я не забыл\n \
        Пока что вот ссылки на мои соусы ;)";
        document.getElementById('deepsea').innerHTML="ПОГРУЗИТЬСЯ";
    }else{
        document.getElementById('lang')
        .innerHTML="ENG";
        document.getElementById('main_content')
        .innerHTML="Sup\n \
        Hi-hi! Welcome to my place! Beeb World!\n \
        There's aint much now. I just started the site...\n \
        But wait! There will be some stuff I'll make. Hope I won't forget it.\n \
        At least here's my sauce just below ;)";
        document.getElementById('deepsea').innerHTML="DIVE DEEP";
    }
}