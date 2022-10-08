import React from "react";
import Content from '../components/Content';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import CatMenu from "../components/SideBar contents/CatMenu";
import bgImage from '../img/bgImage.png'

function Tasks(props) {
    
    const image = {
        backgroundImage:
        `url(${bgImage})`,
    };
    return (
        <div className="App flex flex-row w-[100vw] min-h-[100vh]" >
            
            <div id="SideBar" className='Sidebar hidden lg:flex '>
                <Sidebar 
                    Name={props.Name}
                    dayList = {props.dayList}
                />
            </div>
            

        <div className='flex flex-col lg:ml-[16rem] w-[Calc(100vw)] bg-cover bg-center bgImage' style={image}>
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
