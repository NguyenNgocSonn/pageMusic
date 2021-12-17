var music = document.getElementById("music");
var icon = document.getElementById("icon");
var btnNext = document.querySelector(".btn-next");
var btnPrev = document.querySelector(".btn-prev");
var listMusics = ['music.mp3','gio-van-hat.mp3','abcdefu.mp3'];
var current = 0;

music.src = `../mp3/${listMusics[current]}`

icon.onclick = changeIcon;
function changeIcon(){
    if(music.paused) {
        music.play();
        icon.src = "../image/pause.png";
    }else {
        music.pause();
        icon.src = "../image/play.png";
    }
}

function play(name) {
    music.src = `../mp3/${name}`
    changeIcon();
}
btnNext.onclick = function (){
    if(current === listMusics.length-1){
         btnNext.classList.add('disable')
    }else {
        btnNext.classList.remove('disable')
        current++;
    }
    play(listMusics[current])
}
btnPrev.onclick = function (){
    if(current === 0){
        btnPrev.classList.add('disable')
    }else {
        btnPrev.classList.remove('disable')
        current--;
    }
    play(listMusics[current])
}