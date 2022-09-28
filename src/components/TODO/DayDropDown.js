import React, { useState } from "react";

export default function(){
    const options = [
        {
            value: 1, 
            label: "Today"
        },
        {
            value: 2, 
            label: "Tomorrow"
        },
        {
            value: 3, 
            label: "Upcoming"
        },
        {
            value: 4, 
            label: "Someday"
        }
    ];


    let [ContentName, setContentName] = useState('Please Select');

    const handleDropDownOutput = param => (e) => {
        setContentName(param);
        let contentBox = document.getElementById('contentBox');
        contentBox.style.display = 'none'
    }

    const days = options.map((e)=>{
        return (
            <button onClick={handleDropDownOutput(e.label)} className="flex p-3 bg-slate-700 w-44 justify-center hover:bg-slate-500 border-b-2 border-slate-500">{e.label}</button>
        );
    })

    const handleOpen=()=>{
        let contentBox = document.getElementById('contentBox');
        if(contentBox.style.display == 'none'){
            contentBox.style.display = 'block'
        }else{
            contentBox.style.display = 'none'
        }
    }
        return(
            <div className="flex flex-col">
                <button onClick={handleOpen}  className="flex p-3 bg-slate-800 w-44 justify-evenly rounded-full flex-row ">
                    <div className="content">{ContentName}</div>
                    <div className="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </button>
                <div className="content m-2 mt-0 w-fit ml-5 hidden" id="contentBox">
                    {days}
                </div>
            </div>
            );
}