import axios from "axios";
import React, {useState} from "react";

const baseURL = "http://localhost:3000/data";

export default function DataGet() {
  const [todos, setTodos] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTodos(response.data);
    });
  }, []);

  if (!todos) return null;

  return (
    <div>
      {todos.map((todo) => 
      <li key={todo.id}> {todo.name} - {todo.due} - {todo.priority} </li> )}
    </div>
  );
}