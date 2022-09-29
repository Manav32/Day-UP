export default function(){
    
    const SideBarData = [
        {
            name: 'Shortcuts',
            subContents: ['Today', 'Next 7 days', 'All task']
        },
        {
            name: 'Lists',
            subContents: ['Personal', 'Work']
        },
        {
            name: 'Tags',
            subContents: ['#important', '#urgent']
        },
    ]

    const handleClick = (arg) => (e) => {
        console.log(arg);
        const ele = document.getElementById(arg);
        if(ele.style.display == 'none'){
            ele.style.display = 'block';
        }else{
            ele.style.display = 'none';
        }
    }
    
    return(
        SideBarData.map((e)=>{
            return(
            <div className="Content space-y-3 scrioo">
                <button onClick={handleClick(e.name)} className="flex flex-row space-x-3">
                    <div className="SideBarName">
                        {e.name}
                    </div>
                    <div className="SideBarLabel flex rounded-full p-1 hover:bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </button>
                        <div className="hidden" id={e.name}>
                            {e.subContents.map((sub)=>{
                                return (
                                <ul className="flex-col ml-4 font-sans font-normal text-slate-300 mt-4 text-sm hover:cursor-pointer hover:font-semibold ">
                                    <li>{sub}</li> 
                                </ul>)
                            })}
                        </div>
            </div>
            );
        })
    );
}