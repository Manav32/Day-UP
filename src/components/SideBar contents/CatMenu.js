import { useState } from "react";

export default function(props){
    
    let [clicked, setClicked] = useState(false);

    const handleCatMenu = (e) => {
        if(!clicked){
            props.setIsVisibleSideBar(true);
            setClicked(true)
        }else{
            props.setIsVisibleSideBar(false);
            setClicked(false);
        }
    }
    return (
        <button onClick={handleCatMenu}  className="btn lg:hidden top-6 right-10 flex flex-col justify-center items-center fixed top z-50">
            <div className={"w-10 h-1 bg-black rounded-full SideBarCatMenu mt-2 ease-in-out duration-300 "+(clicked?"_0_catMenu":'')}></div>
            <div className={"w-10 h-1 bg-black rounded-full SideBarCatMenu mt-2 ease-in-out duration-300 "+(clicked?"_1_catMenu":'')}></div>
            <div className={"w-10 h-1 bg-black rounded-full SideBarCatMenu  mt-2 ease-in-out duration-300 "+(clicked?"_2_catMenu":'')}></div>
        </button>
    );

}