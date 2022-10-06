import React, { useEffect, useState, useRef} from "react";

export default function(props){

    let dropDownRef = useRef();

    useEffect(()=>{
        document.addEventListener("mousedown", (e)=>{
            if(!dropDownRef.current.contains(e.target)){
                setIsOpen(false);
            }
        })
    })

    let [ContentName, setContentName] = useState('Today');

    const handleDropDownOutput = param => (e) => {
        setContentName(param);
        setIsOpen(!isOpen);
        props.setDay(param);
    }

    const days = props.dayList.map((e)=>{
        return (
            <button onClick={handleDropDownOutput(e.label)} className="flex p-3 bg-slate-700 w-44 justify-center hover:bg-slate-500 border-b-2 border-slate-500">{e.label}</button>
        );
    })


    
    const [isOpen,setIsOpen] = useState(false);

    let count = 0; //Checking no. of task in dropdown
    if(props.dayList.map((e)=>{
        count++;  
    }))
    

    if(count == 1){
        return (
            <div className="label flex p-3 bg-slate-800 w-44 justify-evenly rounded-full flex-row mb-2 ">
                {props.dayList[0].label}
            </div>
        );
    }else{
        return(
            <div ref={dropDownRef} className="flex flex-col">
                <button onClick={()=>{setIsOpen(!isOpen)}}  className="flex p-3 bg-slate-800 w-44 justify-evenly rounded-full flex-row mb-2 ">
                    <div className="content ">{ContentName}</div>
                    <div className="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </button>
                    { isOpen?(
                        <div className="content m-2 mt-0 w-fit ml-5  fixed translate-y-14" id="contentBox">
                            {days}
                        </div>
                        ):(<div></div>)
                    }
            </div>
            );
        }
}