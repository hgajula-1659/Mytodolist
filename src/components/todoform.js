import {useState} from "react";
import {v1 as uuid} from "uuid"; 

function Todoform({addTodo}){
    const[todo,settodo] = useState({
        id:"",
        task:"",
        date:"",
        completed:false
    });
function handletodoChange(e){
    settodo({...todo,task:e.target.value});
}
function handletodoChangedate(e){
    settodo({...todo,date:e.target.value});
}

function handleSubmit(e){
e.preventDefault();
if(todo.task.trim()){
    addTodo({...todo,id:uuid()});
    settodo({...todo,task:""});
}
}

    return(
        <form onSubmit={handleSubmit}>
            <input
            name="task"
            type="text"
            value={todo.task}
            onChange={handletodoChange}/>
            <input
             name="date"
            type="datetime-local"
              onChange={handletodoChangedate}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Todoform;