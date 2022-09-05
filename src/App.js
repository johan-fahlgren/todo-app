import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "pick up dry cleaning",
      isCompleted: true,
    },
    {
      content: "Get a haircut",
      isCompleted: false,
    },
    {
      content: "Build a todo app in React",
      isCompleted: false,
    },
  ]);

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];

    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });

    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>TODO</h1>
      </header>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input
                type="text"
                value={todo.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
