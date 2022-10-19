import { useRef, useState } from "react";
import plus from "../../img/plus.svg"
import minus from "../../img/minus.svg"

export default function(props){
    
    let [duration, setDuration] = useState(0);
    let min = 0;
    let max = 200;
// unit of "duration" in minutes
    const incrTimeoutID = useRef(null)
    const decrTimeoutID = useRef(null)

    const getNewRate = (rate) => {
        switch(rate){
            case 1:
                rate = 2
                break
            case 2:
                rate = 5
                break
            case 5:
                rate = 10
                break
            case 10:
                rate = 15
                break
            
            default:
                break
        }
        return rate;
    }

    const decr= (rate, oldDuration) =>{
        let newDuration = oldDuration-rate;
        if(newDuration>=min){
            decrTimeoutID.current = setTimeout(() => {
                setDuration(newDuration)
                decr(getNewRate(rate), newDuration)
            }, 450);
        }else if(oldDuration-1 >= min){
            rate = 1
            newDuration = oldDuration-rate
            decrTimeoutID.current =setTimeout(() => {
                setDuration(newDuration);
                decr(getNewRate(rate), newDuration)
            }, 450);
        }
    }
    const incr= (rate, oldDuration) =>{
        let newDuration = oldDuration+rate;
        if(newDuration<=max){
            incrTimeoutID.current = setTimeout(() => {
                setDuration(newDuration)
                incr(getNewRate(rate), newDuration)
            }, 450);
        }else if(oldDuration+1 <= max){
            rate = 1
            newDuration = oldDuration+rate
            incrTimeoutID.current =setTimeout(() => {
                setDuration(newDuration);
                incr(getNewRate(rate), newDuration)
            }, 450);
        }
    }

    return (
        <div className="flex flex-row bg-white p-3 px-5 rounded-full m-4 text-black space-x-5">
            <img 
                onMouseDown={()=>{
                    duration + 1 <= max && setDuration(duration+1)
                    incr(1, duration)
                }} 
                
                onMouseUp={() => clearTimeout(incrTimeoutID.current)}
                onMouseLeave={() => clearTimeout(incrTimeoutID.current)}

                className="text-4xl cursor-pointer" 
                src={plus} alt="+" width="40"
            />
            <label className="text-5xl w-20 text-center">{duration}</label>
            <img 
                onMouseDown={()=>{
                    duration - 1 >= min && setDuration(duration-1)
                    decr(1, duration)
                }} 
                onMouseUp={() => clearTimeout(decrTimeoutID.current)}
                onMouseLeave={() => clearTimeout(decrTimeoutID.current)}

                className="text-4xl cursor-pointer" 
                src={minus} alt="-" width="40" 
            />
    </div>
    )
}