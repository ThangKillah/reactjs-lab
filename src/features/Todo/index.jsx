import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoListInit = [
    { id: 1, title: "Diablo", status: "new" },
    { id: 2, title: "Diablo 2", status: "new" },
    { id: 3, title: "Diablo 3", status: "completed" },
    { id: 4, title: "Diablo 4", status: "completed" },
  ];

  const [todoList, setTodoList] = useState(todoListInit);

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const status = newTodoList[id].status;
    newTodoList[id].status = status === "new" ? "completed" : "new";
    setTodoList(newTodoList);
  };

  return (
    <div>
      <TodoList todoList={todoList} onClickTodo={toggleTodo} />
    </div>
  );
}

export default TodoFeature;
