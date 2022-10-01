import { Link } from "react-router-dom";

export default function(){
    
    const SideBarData = [
        {
            name: 'Shortcuts',
            subContents: [
            {
            name:'Today',
            link:'/daily-planner/Today'
            },
            {
                name:'Tomorrow',
                link:'/daily-planner/Tomorrow'
            },
            {
                name:'All Task',
                link:'/daily-planner'
            }
        ]
        },
        {
            name: 'Lists',
            subContents: [
                {
                name:'Personal',
                link:'/daily-planner/Personal'
                },
                {
                    name:'Work',
                    link:'/daily-planner/Work'
                }
            ]
        },
        {
            name: 'Tags',
            subContents: [
                {
                name:'important',
                link:'/daily-planner/important'
                },
                {
                    name:'urgent',
                    link:'/daily-planner/urgent'
                },
            ]
        },
    ]

    const handleClick = (arg) => (e) => {
        console.log(arg);
        const ele = document.getElementById(arg);
        if(ele.classList.contains('hidden')){
            ele.classList.remove('hidden');
        }else{
            ele.classList.add('hidden');
        }
    }
    
    return(
        SideBarData.map((e)=>{
            return(
            <div className="Content space-y-3 scrollbar">
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
                        <div className="hidden" id={e.name} >
                            {e.subContents.map((sub)=>{
                                return (
                                <div className="flex-col ml-4 font-sans font-normal text-slate-300 mt-4 text-sm hover:cursor-pointer hover:font-semibold ">
                                    <Link to={sub.link}>{sub.name}</Link> 
                                </div>)
                            })}
                        </div>
            </div>
            );
        })
    );
}