import React, { useContext } from "react";
import taskContext from "../context/Task/TaskContext";
import SideBarContent from "./SideBar contents/SideBarContent";
export default function(){

    const tc = useContext(taskContext);

    return <div className="h-[100vh] bg-slate-900 w-64 text-white flex flex-col p-3 font-mono  text-xl font-bold overflow-y-auto scrollbar fixed" >
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
            <button className="Task button font-normal bg-blue-400 p-3 m-2 rounded-full hover:bg-blue-500">+ Create a Task</button>
        </div>
        <div className="SideBarContent flex flex-col space-y-8 mt-10 p-2 ">
            <SideBarContent />
        </div>
    </div>;
}