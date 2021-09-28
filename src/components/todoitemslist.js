
import Todo from "./todoitem";
function TodoItemsList({todos,removeTodo, toggleComplete}){

    return(
<ul>
    {todos.map(todo=>(
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo}
        toggleComplete={toggleComplete}/>
    ))}
</ul>
    );
}

export default TodoItemsList;