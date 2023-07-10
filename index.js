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
        }, 1000)
    }
    startTiming()
});

function stopTimer() {
    clearInterval(startTimer);
    
};
function resetTimer() {
    clearInterval(startTimer);

};

reset.addEventListener('click', function () {
    hr.value = 0;
    min.value = 0;
    sec.value = 0;
    
})

pause.addEventListener('click', function () {
    stopTimer();
    showNotification();

});

//notification
var permission = Notification.permission;

if (permission === "granted") {
    showNotification();
} else if (permission === "default") {
    requestAndShowPermission();
} else {
    alert("Use normal alert");
}
function showNotification() {
    if (document.visibilityState === "visible") {
        return;
    }
    var title = "Alarm Notify";
    var icon = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
    var body = "Note, Time is Up";
    var notification = new Notification('Title', { body, icon });
    notification.onclick = () => {
        notification.close();
        window.alert.focus();
    }
}
function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}