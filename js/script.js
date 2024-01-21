var timer = false;
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;



function stopWatch(){
    if(timer==true){
        count ++;
        if(count == 100){
            sec++;
            if(sec==60){
                min++;
                if(min==60){
                    hr++;
                    document.querySelector("#hr").innerText=`${hr} hr`;
                    min =0;
                }
                document.querySelector("#min").innerText = `${min} min`;
                sec=0;
            }
            document.querySelector("#sec").innerText = `${sec} sec`;
            count =0;
        }
        document.querySelector("#msec").innerHTML = count;
        setTimeout(stopWatch,10);
        
    }
    
}
function start(){
    timer = false;
    timer = true;
    stopWatch();
    document.querySelector("#start").disabled = true;
    document.querySelector("#stop").disabled = false;
    document.querySelector("#start").style.color = "green"
    document.querySelector("#stop").style.color = "white";
}


function stop(){
    timer = false;
    stopWatch();
    document.querySelector("#stop").disabled = true;
    document.querySelector("#start").disabled = false;
    document.querySelector("#stop").style.color = "red";
    document.querySelector("#start").style.color = "white"
    
}

function reset(){
   
    stopWatch();
     timer = false;
     count =0;
     sec = 0;

     document.querySelector("#hr").innerText=`00 hr`;
     document.querySelector("#min").innerText = `00 min`;
     document.querySelector("#sec").innerText = `00 sec`;
     document.querySelector("#msec").innerHTML = `00`;
     document.querySelector("#stop").disabled = false;
     document.querySelector("#start").disabled = false;
     document.querySelector("#stop").style.color = "white";
    document.querySelector("#start").style.color = "white"
}

document.querySelector("#start").addEventListener("click" , start);
document.querySelector("#stop").addEventListener("click"  , stop);
document.querySelector("#reset").addEventListener("click", reset);
