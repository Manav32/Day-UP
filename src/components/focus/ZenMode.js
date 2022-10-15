import { useContext, useState } from "react";
import taskContext from "../../context/Task/TaskContext";
import DayDropDown from "../TODO/DayDropDown";
import FocusModeInput from "./FocusModeInput";
import FocusModeTimer from "./FocusModeTimer";


export default function(props){
    
    const ts = useContext(taskContext);
    let [taskName, setTaskName] = useState('');

    const [day, setDay] = useState(props.dayList[0].label);

    const handleSetDay = (day) => {
        setDay(day);
    }
    let FocusTaskSet = false;
    let setId = 0;

    const handleBlur = (task) => {
        const list = document.getElementsByClassName("Task_List");
        const checkBox = document.getElementsByClassName("form-check-input");
        const Menu = document.getElementById("DropDownMenu");
        const submitBtn = document.getElementById("submit-bt");

        if(!FocusTaskSet){
            console.log(FocusTaskSet);
            for(let i=0; i<list.length; i++){
                if(list[i].id == task.id){
                    continue;                         
                }
                list[i].classList.add("blur");
                checkBox[i].disabled = true;
                checkBox[i].classList.remove("cursor-pointer");
            }
            
            Menu.classList.add("invisible");
            FocusTaskSet = true; //Making is Clicked true
            submitBtn.disabled = false;
            setId = task.id; //Setting id
        }else if(task.id == setId){
            for(let i=0; i<list.length; i++){
                if(list[i].id == task.id){
                    continue;                         
                }
                list[i].classList.remove("blur");
                checkBox[i].classList.add("cursor-pointer");
                checkBox[i].disabled = false;
                submitBtn.disabled = true;
            }
            FocusTaskSet = false;
            Menu.classList.remove("invisible");
        }
    };
    
    
    let [FocusModeDataVisible, setFocusModeDataVisible] = useState(false);
    let [FocusModeVisible, setFocusModeVisible] = useState(false);
    let setFocusModeData = <FocusModeInput taskName={taskName} setFocusModeVisible={setFocusModeVisible}/>
    let FocusMode = <FocusModeTimer taskName={taskName} setFocusModeVisible={setFocusModeVisible}                  />
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setFocusModeDataVisible(true);
    }

    return (
        <div className="ZenModeBox h-[35rem] w-80 bg-slate-900 rounded-full pt-5">
            <div className="heading w-full text-center mt-5 text-2xl underline underline-offset-8">Focus Mode</div>
            <div className="note w-full text-center mb-3 mt-3 text-xs">
                Please Select any task to continue
            </div>
            <form onSubmit={handleSubmit}>
                <div id="DropDownMenu" className="bg-slate-300 rounded-full w-fit mx-auto transition duration-200">
                            <DayDropDown 
                            setDay = {handleSetDay}
                            dayList = {props.dayList}
                            />
                </div>

                <div className="taskList my-4 h-[16rem] p-3">
                    <div className="Tasks overflow-y-auto max-h-[15rem] scrollbar
                    ">
                        {
                            ts.taskList.map((Task) => {
                                if (Task.name != null && Task.day != null && (Task.day == day)) {
                                    return (<div className="Task_List mt-4 bg-b p-2 px-4 rounded-full flex flex-row items-center bg-slate-800 min-w-fit transition duration-200" id={Task.id}>
                                        
                                        <div className="checkbox" onClick={()=>handleBlur(Task)}>
                                            <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" name="task"/>
                                        </div>

                                        <div className="TaskName content mx-4 font-light">
                                            {Task.name}
                                        </div>

                                    </div>);
                                }
                            }
                            )}
                    </div>
                </div>
                
                <div className="Submit btn flex justify-center">
                    <button id="submit-bt" className="p-4 px-10 bg-white text-slate-900 font-bold w-fit rounded-full text-xl" disabled>
                        Start
                    </button>
                </div>
            </form>

            {FocusModeDataVisible?(FocusModeVisible?FocusMode:setFocusModeData):''}
            
        </div>
    );
}