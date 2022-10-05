import React from "react";
import Content from '../components/Content';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import CatMenu from "../components/SideBar contents/CatMenu";

function Tasks(props) {

    return (
        <div className="App flex flex-row w-[100vw] min-h-[100vh]">
            
            <div id="SideBar" className='Sidebar hidden lg:flex'>
                <Sidebar />
            </div>
            

        <div className='flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 lg:ml-[16rem] w-[Calc(100vw)] '>
            <CatMenu />

            <Nav />
            <Content 
            Name={props.Name}
            dayList = {props.dayList}
            />
        </div>
        </div>
    );
}

export default Tasks;
