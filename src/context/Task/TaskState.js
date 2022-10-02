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
    const [taskList, setTaskList] = useState(ts);
    const [userName, setUserName] = useState('');



    return(
        <taskContext.Provider value={{taskList, setTaskList, userName, setUserName}}>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;