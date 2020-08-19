import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <div>
        <h2>Jorge's To Do List</h2>
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <TodoForm />
      </div>
    </>
  );
}

export default App;
