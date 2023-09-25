var hour = document.querySelector("#hour");
var sec = document.querySelector("#second");
var min = document.querySelector("#minute");
var panelBtm = document.querySelector("#btn-panel");
var startBtn = document.querySelector(".start-btn");
var resetBtn = document.querySelector(".reset-btn");
var minHead = document.querySelector("#min-heading");
var secHead = document.querySelector("#sec-heading");
var hourHead = document.querySelector("#hour-heading");
var start = false;
var minVal;
var secVal;
var hourVal;
var secInterval;


startBtn.addEventListener('click',function(){
    if(start===false){
        secInterval = setInterval(function(){
            secVal = Number(sec.innerHTML)+1;
            if(secVal===60){
                secVal=0;
                changeMinVal();
            }
            if(secVal>=10){
                secHead.innerHTML = "Seconds";
            }else{
                secHead.innerHTML = "Second";
            }
            sec.innerHTML = secVal;
        },1000)
        startBtn.innerHTML = "Pause";
        startBtn.classList.add("modified-btn");
        resetBtn.classList.add("modified-btn");
        resetBtn.style.display = "flex";
        start = true;
    }else{
        clearInterval(secInterval);
        startBtn.innerHTML = "Start";
        start = false;
    }
})
resetBtn.addEventListener("click",function(){
    window.location.reload();
})
function changeMinVal(){
    minVal = Number(min.innerHTML)+1;
    if(minVal === 60){
        minVal=0;
        changeHourVal();
    }
    if(minVal>=10){
        minHead.innerHTML = "Minutes";
    }else{
        minHead.innerHTML = "Minute";
    }
    min.innerHTML = minVal;
}
function changeHourVal(){
    hourVal = Number(hour.innerHTML)+1;
    if(hourVal === 24){
        window.location.reload();
    }
    if(hourVal>=10){
        hourHead.innerHTML = "Hours";
    }else{
        hourHead.innerHTML = "Hour";
    }
    hour.innerHTML = hourVal;
}
