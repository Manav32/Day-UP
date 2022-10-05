import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import taskContext from "../context/Task/TaskContext";


const UserDetails = (props)=>{

    const tc = useContext(taskContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    tc.setUserName(name);
    const handleName = (e) => {
        e.preventDefault();
        console.log(name);
        props.HandleSetName(name);
        navigate("/daily-planner");
    }


    
    return (
        <div className="w-[100vw] h-[100vh] bg-slate-700 text-white fixed">
            <div className="heading text-center mt-10 md:mt-20 lg:mt-36 font-mono">
                <div className="text-5xl font-bold flex flex-row w-full justify-center">Hi! {name}</div>
                <div className="text-4xl font-bold flex flex-row w-full justify-center mt-5">Welcome to DayUp</div>
                <div className="text-lg mt-3">This website will help you to manage your busy day and help you to efficiently complete your daily tasks</div>
            </div>
            <form onSubmit={handleName} className="mt-20 w-2/3 md:w-1/3 lg:w-1/3 mx-auto">
                <input maxLength='20' required type='text' placeholder="Enter your name" className="font-mono p-2 rounded w-full text-center focus:outline-blue-800 text-black font-bold" onChange={(e)=>setName(e.target.value)}/>
                <button className="font-bold flex flex-row bg-slate-800 rounded-full p-1 px-5 mx-auto mt-10 hover:bg-slate-900 ">
                    <div className="m-3 text-2xl">Continue</div>
                    <div className="m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                </button>
            </form>
            
        </div>
    );
}
export default UserDetails;