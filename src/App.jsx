import TodoForm from "./componentes/TodoForm";
import TodoList from "./componentes/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create-todo" element={<TodoForm />} />
        <Route path="/edit-todo/:id" element={<TodoForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
