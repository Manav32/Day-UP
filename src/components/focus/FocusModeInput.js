export default function(props){
    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50">
            <div className="h-fit w-fit  lg:h-[26rem] lg:w-[28em] bg-slate-800  mt-20 rounded-lg mx-auto p-3"> 
            <p className="text-center mb-3 text-xl"><b>Task</b>: {props.taskName}</p>
            <hr />
                <form onSubmit={()=>props.setFocusModeVisible(true)} className="text-xl mt-10 flex flex-col items-center w-full">
                    <label className="underline underline-offset-8">Enter Time limit</label>
                    <input required type="number" className="text-black h-10 w-32 rounded-full focus:outline-none text-xl px-3 bg-gray-300 my-5" min="0"/>
                    <button className="bg-white p-3 px-6 text-slate-900 rounded-full">Begin</button>
                </form>
            </div>
        </div>
    )
}