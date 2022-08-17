window.onload = function() {
    let secnds = 00;
    let milsecs = 00;
    let appendMilsecs = document.getElementById("milsecs");
    let appendSecnds = document.getElementById("secnds");
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let resetButton = document.getElementById("reset");
    let intrval;
    startButton.onclick = function() {
        clearInterval(intrval);
        intrval = setInterval(timerStart, 10);
    }
    function timerStart() {
        milsecs ++;
        if(milsecs <= 9) {
            appendMilsecs.innerHTML = "0" + milsecs;
        }
        if(milsecs > 9) {
            appendMilsecs.innerHTML = milsecs;
        }
        if(milsecs > 99) {
            secnds ++;
            appendSecnds.innerHTML = "0" + secnds;
            milsecs = 0;
            appendMilsecs.innerHTML = "00";
        }
        if(secnds > 9) {
            appendSecnds.innerHTML = secnds;
        }
    }
    stopButton.onclick = function() {
        clearInterval(intrval);
    }
    resetButton.onclick = function () {
        clearInterval(intrval);
        milsecs = 0;
        secnds = 0;
        appendMilsecs.innerHTML = "00";
        appendSecnds.innerHTML = "00";
    }
}