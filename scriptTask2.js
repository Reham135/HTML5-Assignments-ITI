var span = document.getElementById('spanId')
var red = document.getElementById('redId')
var green = document.getElementById('greenId')
var blue = document.getElementById('blueId')
function changecolor() {
    span.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}







/* red.addEventListener("input", changecolor);
green.addEventListener("input", changecolor);
blue.addEventListener("input", changecolor);  */