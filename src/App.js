import React from "react";
import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import Tasks from "./MainTaskPages/Tasks";
import UserDetails from "./MainTaskPages/Welcome";
import Today from "./MainTaskPages/Today";
import Tomorrow from "./MainTaskPages/Tomorrow";
import TaskState from "./context/Task/TaskState";

function App() {

  const [name, setName] = useState('');

    const setNameHandle = (name) => {
      setName(name);
      console.log(name)
    }

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

    const [Task, setTask] = useState('');
    
  return (
    <div className="App flex flex-row w-[100vw]">
      <TaskState>
        <Routes>
            <Route path="/" element={<UserDetails HandleSetName={setNameHandle} />}/>
            <Route path="/daily-planner" element={<Tasks 
            Name={name}
            task={Task}
            setTaskList={setTask}
            dayList={dayList}
            />}/>
            <Route path="/daily-planner/Today" element={<Today 
            task={Tasks}
            dayList={dayList.slice(0,1)}
            />}/>
            <Route path="/daily-planner/Tomorrow" element={<Tomorrow
            task={Tasks}
            dayList={dayList.slice(1,2)}
            />}/>
        </Routes>
      </TaskState>
    </div>
  );
}

export default App;
