import { useEffect, useRef } from "react";
import StopWatch from "./StopWatch";

export default function(props){
    
    let createFocusRef = useRef();

    useEffect(()=>{
        document.addEventListener("mousedown", (e)=>{
            if(!createFocusRef.current.contains(e.target)){
                props.setFocusModeVisible(false);
            }
        })
    })

    return (
        <div ref={createFocusRef} className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50">
            <div className="h-fit w-fit  lg:h-[26rem] lg:w-[28em] bg-slate-800  mt-20 rounded-lg mx-auto p-3"> 
            <p className="text-center mb-3 text-xl"><b>Task</b>: {props.taskName}</p>
            <hr />
            <div className="stopwatch flex items-center justify-center mt-5 ">
                <StopWatch />
            </div>
            </div>
        </div>
    );
}