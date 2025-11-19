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
		document.getElementById("title").innerHTML="Досье: Рин Крью`Зуум";
        document.getElementById("name").innerHTML="Рин Крью`Зуум";
        document.getElementById('smp_flvr').innerHTML="Скрелл с тремя хвостами с концами окрашенные в розово-фиолетовый цвет оканчивающие до локтей. Глаза тёмно-синего цвета с чёрным склера. Виднеются жабры по бокам горла.";
        document.getElementById("sky_vers").innerHTML="Skyrat версия:";
        document.getElementById("sky_flvr").innerHTML="Естественный для своего вида скрелл, цвет кожи которого была слабо зелёного оттенка. На коже самом можно было заметить ни единой волосинки, но она будто была гладкая и довольно прозрачная выдавая его такой прелестной. Большой и выделяющей чертой можно было сказать его три длинных хвостика окончание которых было до плеч. На вид они мясистые, но всё же также получает характер кожи: прозрачные, мягкие и даже кажутся влажными по непонятным для глаз зрителей причин. Говоря уже о глазах то они были нестандартные для других видов как людей. Его глаза были тёмно-синего цвета, но склера была полностью тёмная. К сожалению у таких скреллов не бывает носа, как и у того кого вы разглядываете. Были какие-то прорези. Как если нос придавили. Но также в уникальность входили жабры который было бы трудно заметить по бокам горла. Отходя уже от головы, к его рукам, то на них были перепонки которые не были слишком большие. Они будто готовы и для плавания и для простых ручных работ в перчатках.";
    }else{
		document.getElementById("title").innerHTML="Dossier: Rin Qrru`Zuum";
        document.getElementById("name").innerHTML="Rin Qrru`Zuum";
        document.getElementById('smp_flvr').innerHTML="Skrell with three headtails which ends are colored in pink-violet color ending up to the elbows. Eyes dark blue with black sclera. And gills on the sides of the throat.";
        document.getElementById("sky_vers").innerHTML="Skyrat version:";
        document.getElementById("sky_flvr").innerHTML="A natural skrell for its kind, whose skin color was a faintly green shade. Not a single hair could be seen on the skin itself, but it seemed to be smooth and quite transparent, giving him away so charming. A big and distinguishing feature could be said to be his three long tendrils, the end of which was shoulder-length. They look fleshy, but they also get the character of the skin: transparent and soft, that can be seen to the eyes. Speaking of eyes, they were non-standard for other species as humans. His eyes were dark blue, but the sclera was completely dark. Unfortunately, such skrells do not have a nose, just like the one you are looking at. There were some slits. As if the nose was pinned down. But also the uniqueness included gills that would be difficult to notice on the sides of the throat.";
    }
}

