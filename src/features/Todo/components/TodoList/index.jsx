import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onClickTodo: PropTypes.func,
};

function TodoList({ todoList, onClickTodo }) {
  const handleClickOnTodo = (index) => {
    if (!onClickTodo) return;
    console.log("click test");
    onClickTodo(index);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          onClick={() => handleClickOnTodo(index)}
          key={todo.id}
          className={classnames("test", {
            completed: todo.status === "completed",
          })}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
