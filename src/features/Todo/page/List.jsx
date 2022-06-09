import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

TodoFeatureList.propTypes = {};

function TodoFeatureList(props) {
  const todoListInit = [
    { id: 1, title: "Diablo", status: "new" },
    { id: 2, title: "Diablo 2", status: "new" },
    { id: 3, title: "Diablo 3", status: "completed" },
    { id: 4, title: "Diablo 4", status: "completed" },
  ];

  const [todoList, setTodoList] = useState(todoListInit);
  const [filter, setFilter] = useState("all");

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const status = newTodoList[id].status;
    newTodoList[id].status = status === "new" ? "completed" : "new";
    setTodoList(newTodoList);
  };

  const filterTodoList = todoList.filter(
    (todo) => filter === "all" || todo.status === filter
  );

  useEffect(() => {
    console.log("this is effect");
    return () => {
      console.log("clean effect");
      // Execute before the next effect or unmount.
    };
  }, [filter]);

  return (
    <div>
      <TodoList todoList={filterTodoList} onClickTodo={toggleTodo} />
      <br />
      <button onClick={() => setFilter("all")}>Show All</button>
      <button onClick={() => setFilter("completed")}>Show Completed</button>
      <button onClick={() => setFilter("new")}>Show New</button>
    </div>
  );
}

export default TodoFeatureList;
