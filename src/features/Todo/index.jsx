import React from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    { id: 1, title: "Diablo" },
    { id: 2, title: "Diablo 2" },
    { id: 3, title: "Diablo 3" },
    { id: 4, title: "Diablo 4" },
  ];

  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
