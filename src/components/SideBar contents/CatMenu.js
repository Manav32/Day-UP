export default function(){
    
    const handleCatMenu = (e) => {
        let SideBar = document.getElementById("SideBar");
        //CatMenu
        let menu = document.getElementsByClassName("SideBarCatMenu");

        if(SideBar.classList.contains("hidden")){
            SideBar.classList.remove("hidden");
            //CatMenu
            menu[0].classList.remove("bg-black");
            menu[2].classList.remove("bg-black");

            menu[1].classList.add("hidden");
            
            menu[0].classList.add("bg-white");
            menu[0].classList.add("rotate-45");
            menu[0].classList.add("absolute");
            menu[0].classList.add("top-1");
            menu[0].classList.add("right-1");
            
            menu[2].classList.add("bg-white");
            menu[2].classList.add("-rotate-45");
            menu[2].classList.add("absolute");
            menu[2].classList.add("top-3");
            menu[2].classList.add("right-1");
            menu[2].classList.add("mt-0");
            
            
            
        }else{
            SideBar.classList.add("hidden");
            //Cat menu
            menu[0].classList.remove("bg-white");
            menu[0].classList.remove("rotate-45");
            menu[0].classList.remove("absolute");
            menu[0].classList.remove("top-1");
            menu[0].classList.remove("right-1");
            
            menu[2].classList.remove("bg-white");
            menu[2].classList.remove("-rotate-45");
            menu[2].classList.remove("absolute");
            menu[2].classList.remove("top-3");
            menu[2].classList.remove("right-1");
            menu[2].classList.remove("mt-0");

            menu[1].classList.remove("hidden");
            
            menu[0].classList.add("bg-black");
            menu[2].classList.add("bg-black");

        }
        


    }
    return (
        <button onClick={handleCatMenu} className="btn lg:hidden top-6 right-3 flex flex-col justify-center items-center fixed top z-50">
            <div className="w-10 h-1 bg-black rounded-full SideBarCatMenu mt-2 ease-in-out duration-300"></div>
            <div className="w-10 h-1 bg-black rounded-full SideBarCatMenu mt-2 ease-in-out duration-300"></div>
            <div className="w-10 h-1 bg-black rounded-full SideBarCatMenu  mt-2 ease-in-out duration-300"></div>
        </button>
    );

}