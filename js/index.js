var titleMusic = document.querySelector(".title-music");
var music = document.getElementById("music");
var icon = document.getElementById("icon");
var btnNext = document.querySelector(".btn-next");
var btnPrev = document.querySelector(".btn-prev");
var listMusics = [
    {
        title: "Music",
        src: "music.mp3"
    },
    {
        title: "Gio<br>Van<br>Hat",
        src: "gio-van-hat.mp3"
    },
    {
        title: "ABCDEFU",
        src: "abcdefu.mp3"
    }
];
var current = 2;

function init(){
    titleMusic.innerHTML = listMusics[current].title;
    music.src = `../mp3/${listMusics[current].src}`
    if (current === 0) {
        btnPrev.classList.add('disable')
    }
    if (current === listMusics.length - 1) {
        btnNext.classList.add('disable')
    }
}

music.onplaying = function(e) {
    console.log("as",e)
};

icon.onclick = changeIcon;

function changeIcon() {
    if (music.paused) {
        music.play();
        icon.src = "../image/pause.png";
    } else {
        music.pause();
        icon.src = "../image/play.png";
    }
}

function play(name) {
    titleMusic.innerHTML = listMusics[current].title;
    music.src = `../mp3/${name}`
    changeIcon();
}

btnNext.onclick = function () {
    current++;
    checkDisableButton(current);
    play(listMusics[current].src)
}

btnPrev.onclick = function () {
    current--;
    checkDisableButton(current);
    play(listMusics[current].src)
}

function checkDisableButton(current) {
    if (current === 0) {
        btnPrev.classList.add('disable')
    } else if (current === listMusics.length - 1) {
        btnNext.classList.add('disable')
    } else {
        btnNext.classList.remove('disable')
        btnPrev.classList.remove('disable')
    }
}
init()