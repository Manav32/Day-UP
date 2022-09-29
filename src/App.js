import React from "react";
import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import Tasks from "./MainPages/Tasks";
import UserDetails from "./MainPages/UserDetails";

function App() {

  const [name, setName] = useState('');

    const setNameHandle = (name) => {
      setName(name);
      console.log(name)
    }

  return (
    <div className="App flex flex-row w-[100vw]">
      <Routes>
          <Route path="/daily-planner" element={<Tasks Name={name}/>}/>
          <Route path="/" element={<UserDetails HandleSetName={setNameHandle} />}/>
      </Routes>
    </div>
  );
}

export default App;
