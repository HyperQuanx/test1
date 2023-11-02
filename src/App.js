import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      todo: "react를 배워봅시다.",
    },
  ]);
  const [todo, setTodo] = useState("");

  const addTodo = (event) => {
    setTodo(event.target.value);
  };

  const clickButton = () => {
    const addTodoList = {
      id: Date.now() + Math.random(),
      todo,
    };
    setTodoList([...todoList, addTodoList]);
    setTodo("");
  };

  return (
    <div>
      <div className="input-group">
        <div className="headerInput">
          <input value={todo} onChange={addTodo} />
          <button onClick={clickButton}>추가하기</button>
        </div>
        <div className="big">Todo List</div>
      </div>
      <div className="app-style">
        {todoList.map((user) => {
          return (
            <div key={user.id} className="app-container">
              {user.todo}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
