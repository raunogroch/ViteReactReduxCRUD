import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addTodo, updateTodo } from "../features/todos/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector(state => state.todos)

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    params.id ? dispatch(updateTodo(todo)) : dispatch(addTodo({ ...todo, id: uuid() }));
    
    navigate("/");
  };

  useEffect(() => {
    if(params.id){
      const todo = todos.find(item => item.id === params.id)
      setTodo(todo)
    }
  }, []);

  return (
    <>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={todo.description}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
};

export default TodoForm;
