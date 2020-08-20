import React from "react";

function Todo({ list, dispatch }) {
  console.log(list);
  const toggleCompleted = () => {
    dispatch({
      type: "COMPLETED_TODO",
      payload: list.id,
    });
  };

  return (
    <>
      <div
        className={`list${list.completed ? " completed" : ""}`}
        onClick={toggleCompleted}
      >
        <p>{list.item}</p>
      </div>
    </>
  );
}

export default Todo;
