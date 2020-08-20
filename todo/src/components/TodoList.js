import React from "react";
import Todo from "./Todo";

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      {state.map((list) => {
        return <Todo key={list.id} list={list} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
