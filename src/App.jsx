import { useEffect, useState } from "react";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { ListTask } from "./components/ListTask";
import toast, { Toaster } from 'react-hot-toast';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("tasks"))){
      setTasks(JSON.parse(localStorage.getItem("tasks")))
    }
  }, [])
  console.log(tasks)
  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster /> 
    <div className="bg-red-100 text-white w-full min-h-screen flex flex-col items-center pt-32 gap-16  pb-32 relative">
      <h1 className="w-full text-center text-5xl">Project-Board</h1>
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTask tasks={tasks} setTasks={setTasks}/>
    </div>
    </DndProvider>
  );
}

export default App;
