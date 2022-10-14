import { useEffect } from "react";

export default function(){
    useEffect(()=>{
        const stopWatch = document.getElementById("stopWatch");
        const startBtn = document.getElementById("start");
        const stopBtn = document.getElementById("stop");
        const resetBtn = document.getElementById("reset");
    
        let startTimer = null;
    
        let [hours, minutes, seconds] = [0, 0, 0];
    
        function disabled(...elems) {
            elems.forEach((elem) => elem.setAttribute("disabled", "true"));
        }
    
        function unDisabled(...elems) {
            elems.forEach((elem) => elem.removeAttribute("disabled"));
        }
    
        function displayTime() {
            seconds++;
    
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
    
                if (minutes >= 60) {
                    hours++;
                    minutes = 0;
    
                    if (hours >= 24) {
                        hours = 0;
                    }
                }
            }
    
            let h = hours < 10 ? "0" + hours:hours;
            let m = minutes < 10 ? "0" + minutes:minutes;
            let s = seconds < 10 ? "0" + seconds:seconds;
    
            stopWatch.innerHTML = `${h}:${m}:${s}`;
        }
    
        startBtn.addEventListener("click", () => {
            if (startTimer !== null) {
                clearInterval(startTimer);
            }
            startTimer = setInterval(displayTime, 1000);
            disabled(startBtn);
            unDisabled(stopBtn, resetBtn);
        });
    
        stopBtn.addEventListener("click", function () {
            clearInterval(startTimer);
            disabled(stopBtn);
            unDisabled(startBtn);
        });
    
        resetBtn.addEventListener("click", function () {
            clearInterval(startTimer);
            disabled(resetBtn, stopBtn);
            unDisabled(startBtn);
            [hours, minutes, seconds] = [0, 0, 0];
            stopWatch.innerHTML = "00:00:00";
        });
    });

    return (
        <div className="Timer w-80 h-80 flex items-center justify-center bg-gray-900 text-white rounded-full ">
            <div>
                <div id="stopWatch" className="text-center text-6xl mt-20">00:00:00</div>
                <div id="Buttons" className="mt-14 flex justify-center items-center space-x-5 ">
                    <button id="start" className="text-slate-900 bg-white p-2 px-5 rounded-full text-lg ">Start</button>
                    <button id="stop" className="text-slate-900 bg-white p-2 px-5 rounded-full text-lg hidden">Stop</button>
                    <button id="reset" className="text-slate-900 bg-white p-2 px-5 rounded-full text-lg ">Reset</button>
                </div>
            </div>
        </div>
    );
}