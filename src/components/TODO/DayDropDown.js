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
            <div onClick={handleDropDownOutput(e.label)} className="hover:ease-in-out hover:duration-400 cursor-pointer hover:bg-slate-400  w-full p-3 hover:rounded border-b-2 border-slate-700">{e.label}</div>
        );
    })


    
    const [isOpen,setIsOpen] = useState(false);

    let count = 0; //Checking no. of task in dropdown
    if(props.dayList.map((e)=>{
        count++;  
    }))
    

    if(count == 1){
        return (
            <div className="label flex p-3 -ml-4 bg-none w-44 justify-evenly rounded-full flex-row mb-2 text-black">
                <div className="name -ml-5 mt-1 ">
                    {props.dayList[0].label}
                </div>
            </div>
        );
    }else{
        return(
            <div ref={dropDownRef} className="flex flex-col h-[15rem] w-[10rem] absolute ">
                    <div onClick={()=>{setIsOpen(!isOpen)}}  className="cursor-pointer flex p-3 -ml-4 mt-1 bg-none w-32 justify-evenly rounded-full flex-row mb-2 text-black max-h-10 bg-slate-300">
                        <div className="content -mt-1">{ContentName}</div>
                        <div className="svg mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div>
                    </div>
                    { isOpen?(
                        <div className="content m-2 w-fit ml-5 " id="contentBox">
                            <div className="flex flex-col bg-slate-300 text-black w-44 justify-center rounded -mt-2">
                                {days}
                            </div>
                        </div>
                        ):(<div></div>)
                    }
            </div>
            );
        }
}