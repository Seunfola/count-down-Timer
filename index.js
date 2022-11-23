let start = document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');

var hr = document.getElementById('hours');
var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');

var startTimer = null;

function timer(){
    if(hr == 0 && min == 0 && sec == 0 ){
        hr.value = 00;
        min.value = 00;
        sec.value = 00;
    }else if(sec.value != 0){
        sec.value--;
    }
    else if( min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    }
    else if(hr.value != 0 && min.value ==0 && sec.value == 0){
        sec.value = 59;
        min.value = 59;
        hr.value--;
    }return;
};


 start.addEventListener('click', function(){
function startTiming(){
    startTimer = setInterval(function(){
        timer();                                                                                                                       
    },1000)
}
startTiming()
 });

 function stopTimer(){
    clearInterval(startTimer);
};
function resetTimer(){
    clearInterval(startTimer)
     }; 

 reset.addEventListener('click',function(){
    hr.value = 00;
    min.value = 00;
    sec.value = 00;
    
})

 pause.addEventListener('click',function(){
    stopTimer()  }                                                                                                                                                                                                                  )
;