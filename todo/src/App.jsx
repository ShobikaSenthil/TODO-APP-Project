import { useState } from 'react'
import ToDoList from './components/ToDoList';
import { v4 as uuidv4, v4 } from "uuid";
import "./style.css"

import { createContext } from 'react';
export const UseContextElement = createContext(null);
const UseContextElementProvider = UseContextElement.Provider;
function App() {
   const [task,setTask] = useState("");
   const [tasklist,setTaskList] =useState([]);
   const [editTodo,setEditTodo] = useState(null);
   const[newVal,setNewValue]=useState("");
   let taskTitle="";

   const addTask = () =>
   {
       if(!task){
           alert("Enter the task");
       }
       setTaskList((prevState)=>[...prevState,{ id : v4(),taskTitle : task }]);
       setTask("");
   }

   const deleteTask = (id) =>
   {
       setTaskList((prevState) =>
       {
           return prevState.filter((item) => item.id !== id);
       })
        
   }

   const editTask = (item) =>
   {
       setEditTodo(item.id);
       setNewValue(item.taskTitle)
   }

   const updateTodo = (id) =>
   {
       setTaskList((prevState)=>{
           return prevState.map((item)=>{
               if(item.id == id){
                   item.taskTitle=newVal
               }
               return item;
           })
       })
       setEditTodo(null);
       setNewValue("");
   }

  return (
   <>
   <UseContextElementProvider value={{tasklist,updateTodo,deleteTask,editTask,editTodo,setNewValue,taskTitle,newVal}}>
   <div className="todo-app">
   <div className="addTask">
       
       <h1>ToDo App</h1>
       <input type="text" className='todo-input' aria-label="default input example" placeholder="Add the task" value = {task}  onChange={(e)=>{setTask(e.target.value)}}></input>
       <button className="todo-button" onClick={addTask}>Add Task</button>
       {/* <ToDoList tasklist={tasklist} updateTodo={updateTodo} deleteTask={deleteTask} editTask={editTask} editTodo={editTodo} setNewValue={setNewValue} taskTitle={taskTitle} newVal={newVal}/> */}
       <ToDoList/>
       </div>
       </div>
    </UseContextElementProvider>
     </>  
   
  )
}

export default App
