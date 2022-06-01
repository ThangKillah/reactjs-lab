import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
