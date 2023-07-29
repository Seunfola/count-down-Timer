let start = document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');

var hr = document.getElementById('hours');
var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');

var startTimer = null;


function timer() {
    if (hr == 0 && min == 0 && sec == 0) {
        hr.value = 0;
        min.value = 0;
        sec.value = 0;
    } else if (sec.value != 0) {
        sec.value--;
    }
    else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value--;
    }
    else if (hr.value != 0 && min.value == 0 && sec.value == 0) {
        sec.value = 59;
        min.value = 59;
        hr.value--;
    } return;
};


start.addEventListener('click', function () {
    function startTiming() {

        startTimer = setInterval(function () {
            timer();

        }, 2000)
    }
    startTiming();
    alert('The Timer has started')
});

function stopTimer() {
    clearInterval();

};
function resetTimer() {
    clearInterval(startTimer);
    hr.value = 0;
    min.value = 0;
    sec.value = 0;
    alert('The Timer has finished')
    navigator.vibrate([320, 200, 100]);
};

reset.addEventListener('click', function () {
    resetTimer()


})

pause.addEventListener('click', function () {
    stopTimer();
    alert('Timer is on hold')

});

