import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../features/todos/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
   
  return (
    <>
      <h3>Cosas por hacer {todos.length}</h3>
      <Link to="/create-todo">Crear nuevo</Link>
      <ul>
        {todos.map(({ id, title, description, completed }) => (
          <li key={id}>
            {title} - {description} 
            <div>
            <button onClick={() => handleDelete(id)}>Eliminar</button>
            <Link to={`edit-todo/${id}`}>Editar</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
