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



    return(
        <taskContext.Provider value={{taskList, setTaskList}}>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;