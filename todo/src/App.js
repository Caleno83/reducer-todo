import React, { useReducer } from "react";
import "./components/Todo.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./Reducers/Reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>Jorge's To Do List</h2>
      </div>
      <div>
        <TodoList state={state} dispatch={dispatch} />
      </div>
      <div>
        <TodoForm state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
