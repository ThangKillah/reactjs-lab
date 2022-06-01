import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

function TodoItem({ todo }) {
  return <div>{todo.title}</div>;
}

export default TodoItem;
