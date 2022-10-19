import Counter from "./Counter";

export default function(props){

    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 items-center justify-center bg-black bg-opacity-50">
            <div className="h-fit w-fit  lg:h-[26rem] lg:w-[28em] bg-slate-800  mt-20 rounded-lg p-3 mx-auto"> 
            <p className="text-center mb-3 text-xl"><b>Task</b>: {props.taskName}</p>
            <hr />
                <form onSubmit={()=>props.setFocusModeVisible(true)} className="text-xl mt-10 flex flex-col items-center w-full">
                    <label className="underline underline-offset-8">Enter Time limit</label>
                    <Counter />
                    <button className="bg-white p-3 px-6 text-slate-900 rounded-full">Begin</button>
                </form>
            </div>
        </div>
    )
}