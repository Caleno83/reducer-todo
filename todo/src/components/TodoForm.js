import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../Reducers/Reducer";

const TodoForm = ({ dispatch }) => {
  const [newList, setNewList] = useState("");

  // console.log("state.todo", state, todo);

  const handleChange = (e) => {
    setNewList(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: newList,
    });
    setNewList("");
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_TODO",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="list"
          value={newList}
          onChange={handleChange}
        />
        <button>Add List</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
