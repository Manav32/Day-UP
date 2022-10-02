import React from "react";
import Content from '../components/Content';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

function Tasks(props) {

    const dayList = [
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

    return (
        <div className="App flex flex-row w-[100vw] min-h-[100vh]">
            
            <div className='Sidebar'>
                <Sidebar />
        </div>
        <div className='flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 ml-[16rem] w-[Calc(100vw)]'>
            <Nav />
            <Content 
            Name={props.Name}
            dayList = {dayList}
            />
        </div>
        </div>
    );
}

export default Tasks;
