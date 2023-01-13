import "../style.css";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {UseContextElement} from "../App";
import { useContext } from "react";

const ToDoList = () =>
{
    const {tasklist,updateTodo,editTask,deleteTask,editTodo,newVal,setNewValue} = useContext(UseContextElement);
    return(
        <div>
            {
                tasklist.map((item)=>{
                        return (
                        <li key={item.id}>
                            {item.id === editTodo ?
                            (
                                <div>
                                    <input type="text" className="todo-input" value={newVal}  onChange={(e)=>setNewValue(e.target.value)}>
                                    </input>
                                    <button className='todo-button edit' onClick={()=>updateTodo(item.id)}>Update</button>
                                </div>
                            ):
                            (
                                <div className="icons">
                                    <p className="todo-input">{item.taskTitle}</p>
                                    <RiCloseCircleLine className='delete-icon' onClick={()=>deleteTask(item.id)}>Delete</RiCloseCircleLine>
                                    <TiEdit className='edit-icon' onClick={()=>editTask(item)}>Edit</TiEdit>
                                    </div>  
                            )
                        }
                            
                        </li>
                        )
                    })
                }
        </div>
    )
}
export default ToDoList;