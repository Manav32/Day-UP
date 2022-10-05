import React, { useState } from "react";
import TasksBox from "./TODO/TasksBox";
export default function(props){

    return <div className="bg-none w-full h-full flex flex-col  text-white ">
            <div className="Menu flex flex-row justify-evenly m-3 bg-slate-900 p-4  w-3/4 sm:w-96 rounded-lg mt-10 mx-auto md:ml-10 ">
                <div className="w-8/12">Good Evening! {props.Name}</div>
                
                <div className="menu flex items-center w-2/12">
                    <ul className="flex flex-row justify-between w-full">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill hover:cursor-pointer" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                            </svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill hover:cursor-pointer" viewBox="0 0 16 16">
                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        </svg>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Task Box */}
                <TasksBox 
                    dayList = {props.dayList}
                />
    </div>;
}