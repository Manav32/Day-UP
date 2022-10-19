import { useContext, useRef, useState } from "react";
import taskContext from "../../context/Task/TaskContext";
import DayDropDown from "../TODO/DayDropDown";
import FocusModeTimer from "./FocusModeTimer";
import FocusTimeCounter from "./FocusTimeCounter";


export default function (props) {
    
    const ts = useContext(taskContext);
    
    //states
    let [taskName, setTaskName] = useState('');
    let [blur, setBlur] = useState(false);
    let [clicked, setClicked] = useState(false);
    let [id, setId] = useState(null);
    const [day, setDay] = useState(props.dayList[0].label);


    const handleSetDay = (day) => {
        setDay(day);
    }

    const handleBlur = (task) => {
        if(!blur){
            setBlur(true);
            setId(task.id);
            setClicked(true);
            setTaskName(task.name);
        }else{
            setBlur(false);
            setId(null);
            setClicked(false);
            setTaskName(null);
        }
    };


    let [FocusModeDataVisible, setFocusModeDataVisible] = useState(false);
    let [FocusModeVisible, setFocusModeVisible] = useState(false);
    let setFocusModeData = <FocusTimeCounter taskName={taskName} setFocusModeVisible={setFocusModeVisible} />
    let FocusMode = <FocusModeTimer taskName={taskName} setFocusModeVisible={setFocusModeVisible} />


    const handleSubmit = (e) => {
        e.preventDefault();
        setFocusModeDataVisible(true);
    }

    return (
        <div className="ZenModeBox h-[35rem] w-80 bg-slate-900 rounded-full pt-5 mx-auto mb-10">
            <div className="heading w-full text-center mt-5 text-2xl underline underline-offset-8">Focus Mode</div>
            <div className="note w-full text-center mb-3 mt-3 text-xs">
                Please Select any task to continue
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-fit flex justify-center mb-10 bg-black ">
                    <div className={"h-fit  w-[30%] "+(clicked?"invisible":'')}>
                        <DayDropDown
                            setDay={handleSetDay}
                            dayList={props.dayList}
                        />
                    </div>
                </div>

                <div className="taskList my-4 h-[16rem] p-3">
                    <div className="Tasks overflow-y-auto max-h-[15rem] scrollbar
                    ">
                        {
                            ts.taskList.map((Task) => {
                                if (Task.name != null && Task.day != null && (Task.day == day)) {
                                    return (<div className={"mt-4 bg-b p-2 px-4 rounded-full flex flex-row items-center bg-slate-800 min-w-fit transition duration-200"+ (blur?((id!=Task.id)?" blur":''):'')}>

                                        <div className="checkbox" onClick={() => handleBlur(Task)}>
                                            <input type="checkbox" className={"form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left"+(!clicked?" cursor-pointer":(id===Task.id?" cursor-pointer":''))} name="task" disabled={(clicked?(Task.id===id?false:true):false)} />
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
                    <button id="submit-bt" className={"p-4 px-10 bg-white text-slate-900 font-bold w-fit rounded-full text-xl "+(!clicked?'invisible':'')} >
                        Start
                    </button>
                </div>
            </form>

            {FocusModeDataVisible ? (FocusModeVisible ? FocusMode : setFocusModeData) : ''}

        </div>
    );
}