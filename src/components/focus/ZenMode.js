import { useContext, useState } from "react";
import taskContext from "../../context/Task/TaskContext";
import DayDropDown from "../TODO/DayDropDown";
import TaskBox from "../TODO/TasksBox";


export default function(props){
    
    const ts = useContext(taskContext);

    const [day, setDay] = useState(props.dayList[0].label);

    const handleSetDay = (day) => {
        setDay(day);
    }
    const handleDelete = (id) => {
        console.log("Task Deleted")
        ts.setTaskList(ts.taskList.filter(item => item.id !== id));
    };

    return (
        <div className="ZenModeBox h-[95%] w-80 bg-slate-900 rounded-full pt-5">
            <div className="heading w-full text-center mt-5 text-2xl underline underline-offset-8">Focus Mode</div>
            <div className="note w-full text-center mb-3 mt-3 text-xs">
                Please Select any task to continue
            </div>
            <div className="DropDown bg-slate-300 rounded-full w-fit mx-auto">
                        <DayDropDown 
                        setDay = {handleSetDay}
                        dayList = {props.dayList}
                        />
            </div>

            <div className="taskList my-4 h-[40%] p-3">
                <div className="Tasks overflow-y-auto max-h-[15rem] scrollbar">
                    {
                        ts.taskList.map((Task) => {
                            if (Task.name != null && Task.day != null && (Task.day == day)) {
                                return (<div className="Task1 mt-4 bg-b p-2 px-4 rounded-full flex flex-row items-center bg-slate-800 min-w-fit ">
                                    <input type="checkbox" />
                                    <div className="Task content mx-4 font-light">
                                        {Task.name}
                                    </div>
                                </div>);
                            }
                        }
                        )}
                </div>
            </div>
            
            <div className="p-4 px-10 bg-white text-slate-900 font-bold w-fit rounded-full mx-auto mt-14 text-xl">
                Start
            </div>
            
        </div>
    );
}