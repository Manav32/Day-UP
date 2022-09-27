export default function(){
    return <div className="w-full p-4 pr-20 text-lg text-white flex justify-end ">
        <div className="LoginBtn p-3 pb-4 text-center px-4 rounded-3xl text-blue-200 bg-slate-900 mx-12 flex flex-row list-none w-64 items-center justify-between">
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill hover:cursor-pointer" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </svg>
            </li>
            
            <li className="flex flex-row justify-between items-center bg-slate-600 rounded-xl w-44">
            <input type="text" placeholder="Search" className="rounded-2xl w-3/5 bg-slate-600 mx-4 p-1 text-center focus:outline-none"/>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="-translate-x-4 bi bi-search hover:cursor-pointer" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </li>
        </div>
        <div className="Options w-fit p-3 pt-4 text-center items-center px-4 rounded-3xl text-blue-200 bg-slate-900 mx-4 hover:cursor-pointer">
            Logout
        </div>
    </div>;
}