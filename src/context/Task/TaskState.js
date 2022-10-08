import React, { useState } from "react";
import taskContext from "./TaskContext";

const TaskState = (props) =>{

    const ts = [
        {
            id: Math.random(),
            name: null,
            day: null
        }
    ]
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
    ];
    const [taskList, setTaskList] = useState(ts);
    const [userName, setUserName] = useState('');



    return(
        <taskContext.Provider value={{taskList, setTaskList, userName, setUserName, dayList}}>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;