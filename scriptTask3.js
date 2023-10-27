var aud = document.getElementById("aud");
var img = document.getElementById("imgId")
var div0 = document.getElementById("div0");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");


function divFun(div) {
    switch (div) {
        case div0:
            chooseOudio(0);
            break;

        case div1:
            chooseOudio(1);
            break;

        case div2:
            chooseOudio(2);
            break;

        case div3:
            chooseOudio(3);
            break;
    }
}
function chooseOudio(i) {
    if (i == 0) {
        aud.setAttribute("src", "eyes closed.mp3");
        img.setAttribute("src", "0.JPG");
        audioPlay();
    }
    else if (i == 1) {
        aud.setAttribute("src", "Matwhashneesh.mp3");
        img.setAttribute("src", "1.JPG");
        audioPlay();

    }
    else if (i == 2) {
        aud.setAttribute("src", "Mestaneky.mp3");
        img.setAttribute("src", "2.JPG");
        audioPlay();

    }
    else if (i == 3) {
        aud.setAttribute("src", "off the table.mp3");
        img.setAttribute("src", "3.JPG");
        audioPlay();

    }
}

function audioPlay() {
    aud.play();
}
function audioPause() {
    aud.pause();
}
function audioStop() {
    aud.load();
    aud.pause();
}
function changeVolume(r) {
    aud.volume = r.value;
}
var timeRange = document.getElementById("timeId");
window.onload = function () {
    timeRange.max = aud.duration;//to get the audio length
}
function changeTime() {                       //to tgary el music 
    aud.currentTime = timeRange.value;
}
function changeTimeRange() {
    timeRange.value = aud.currentTime; //to make the range move automatic with music
    timeRange.max = aud.duration;      //to make the range ends with the end of each music
}

