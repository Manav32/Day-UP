import React, { useContext, useEffect, useRef, useState } from "react";
import taskContext from "../context/Task/TaskContext";
import SideBarContent from "./SideBar contents/SideBarContent";
import SideBarTaskBtn from "./SideBar contents/SideBarTaskBtn";
import DayDropDown from "./TODO/DayDropDown";


export default function(props){

    const tc = useContext(taskContext);
    let [isOpen, setIsOpen] = useState(false);
    let [task, setTask] = useState('');
    const [day, setDay] = useState(props.dayList[0].label);

    const handleSetDay = (day) => {
        setDay(day);
    }

    let createTaskRef = useRef();

    const handleTextAreaHeight = function (e) {
        var element = e.target;  
        element.style.height = 0;
        element.style.height = element.scrollHeight + 'px';
    };

    useEffect(()=>{
        document.addEventListener("mousedown", (e)=>{
            if(!createTaskRef.current.contains(e.target)){
                setIsOpen(false);
            }
        })
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask = {
            id: Math.random(),
            name: task,
            day: day
        }
        const updateExpense = [...tc.taskList, newTask];
        tc.setTaskList(updateExpense);
        setIsOpen(false);
        setTask("");
    }

    return <div className="h-[100vh] bg-slate-900 text-white flex flex-col p-3 font-mono  text-xl font-bold overflow-y-auto scrollbar fixed w-full lg:w-64" >
        <div className="userProfile flex flex-col space-y-6 mt-8">
            <div className="userData flex flex-row items-center justify-center space-x-3 ">
                <div className="User flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div>
                <div className="UserName font-light">{tc.userName}</div>
            </div>
            <button onClick={()=>setIsOpen(!isOpen)} className="Task button font-normal bg-blue-400 p-3 m-2 rounded-full hover:bg-blue-500">+ Create a Task</button>
        </div>


        <div className="SideBarContent flex flex-col space-y-8 mt-10 p-2 ">
            <SideBarContent />
        </div>

        {/* Task Creating Box */}
        {isOpen?<div className="Creating Task box">
            <div id="createTaskBox" className="CreateTaskOption fixed h-[100vh] w-[100vw] bg-slate-400 top-0 left-0 bg-opacity-30 ">
                    <div ref={createTaskRef} className=" h-fit w-fit  lg:h-[26rem] lg:w-[28em] bg-slate-800  mt-20 rounded-lg mx-auto"> 
                        <form className="w-full flex flex-col h-full" onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col lg:flex-row h-full p-4 ">
                                <div className="left w-full lg:w-2/3 h-full border-b-2 lg:border-b-0 lg:border-r-2 pr-4">
                                    <div className="heading">
                                        {/* Taking Task heading From user */}
                                        <input required type="text" placeholder="I want to ..." className="p-2 font-bold font-mono rounded w-full bg-slate-900 focus:outline-none" onChange={(e)=>setTask(e.target.value)} />
                                        <p className="text-slate-600 font-mono mt-2">NOTES</p>
                                    </div>
                                        {/* Taking Notes From user */}
                                    <div className="TaskContent my-3 mb-6 lg:mt-2 overflow-y-auto max-h-[15rem] scrollbar">
                                            <textarea onChange={handleTextAreaHeight} placeholder="Enter your notes here.." rows="1" className="h-full w-full bg-slate-800 focus:bg-slate-900 hover:bg-slate-900 p-2 pt-3 font-light font-mono mt-2 text-sm rounded-lg overflow-hidden focus:outline-none"/>    
                                    </div>
                                </div>
                                
                                <div className="right w-full lg:w-1/3 h-full p-2 my-5">
                                    <div className="List">
                                    </div>
                                    <div className="Reminder">
                                        <p className="lg:border-b-2 border-slate-600 ml-3 lg:text-center">Select Day</p>
                                        <div className="bg-orange-400 w-36 rounded-full mt-5 lg:mt-3 h-10 lg:mx-auto text-base">
                                            <div className="-translate-y-1">
                                                <DayDropDown
                                                    setDay = {handleSetDay}
                                                    dayList = {props.dayList}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="bg-slate-900 p-3 rounded-b-lg  text-slate-400">Submit</button>
                        </form>
                    </div>
                </div>
            </div>:''}
    </div>;
}