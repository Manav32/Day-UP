import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {

  
  return (
    <div className="App flex flex-row w-[100vw]">
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='flex flex-col w-full  bg-gradient-to-r from-sky-500 to-indigo-500'>
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default App;
