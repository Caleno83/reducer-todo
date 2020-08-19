import React from "react";

export const TodoForm = () => {
  return (
    <form>
      <input type="text" name="list" value="list" />
      <button>Add List</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
