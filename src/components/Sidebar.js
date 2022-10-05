import React, { useContext } from "react";
import taskContext from "../context/Task/TaskContext";
import SideBarContent from "./SideBar contents/SideBarContent";
import SideBarTaskBtn from "./SideBar contents/SideBarTaskBtn";


export default function(){

    const tc = useContext(taskContext);

    const handleTextAreaHeight = function (e) {
        var element = e.target;  
        element.style.height = 0;
        element.style.height = element.scrollHeight + 'px';
    };
    

    const handleTaskBoxDisplay = (e) =>{
        const btn = document.getElementById("createTaskBox");
        if(btn.classList.contains("hidden")){
            btn.classList.remove("hidden");
        }else{
            btn.classList.add("hidden");
        }
    }

    let createTaskContent = (
            <div id="createTaskBox" className="CreateTaskOption fixed h-[100vh] w-[100vw] bg-slate-400 top-0 left-0 bg-opacity-50 hidden">
                <div className="h-[26rem] w-[28em] bg-slate-800 mt-20 rounded-lg mx-auto"> 
                    <form className="w-full flex flex-col h-full">
                        <div className="w-full flex flex-row h-full p-4 ">
                            <div className="left w-2/3 h-full border-r-2 pr-4">
                                <div className="heading">
                                    <input type="text" placeholder="I want to ..." className="p-2 font-bold font-mono rounded w-full bg-slate-900 focus:outline-none" />
                                    <p className="text-slate-600 font-mono mt-2">NOTES</p>
                                </div>
                                <div className="TaskContent mt-2 overflow-y-auto max-h-[15rem] scrollbar">
                                        <textarea onChange={handleTextAreaHeight} placeholder="Enter your notes here.." rows="1" className="h-full w-full bg-slate-800 focus:bg-slate-900 hover:bg-slate-900 p-2 pt-3 font-light font-mono mt-2 text-sm rounded-lg overflow-hidden focus:outline-none"/>    
                                </div>
                            </div>
                            
                            <div className="right w-1/3 h-full p-2">
                                <div className="List">
                                </div>
                                <div className="Reminder">
                                    <p>Remind Me</p>
                                    <SideBarTaskBtn />
                                    <SideBarTaskBtn />
                                    <SideBarTaskBtn />
                                </div>
                            </div>
                        </div>
                        <button className="bg-slate-900 p-3 rounded-b-lg drop-shadow-xl text-slate-400">Submit</button>
                    </form>
                </div>
            </div>
    )


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
            <button onClick={handleTaskBoxDisplay} className="Task button font-normal bg-blue-400 p-3 m-2 rounded-full hover:bg-blue-500">+ Create a Task</button>
        </div>


        <div className="SideBarContent flex flex-col space-y-8 mt-10 p-2 ">
            <SideBarContent />
        </div>
        {createTaskContent}
    </div>;
}