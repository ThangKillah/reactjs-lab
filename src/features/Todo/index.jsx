import React from "react";
import { Outlet } from "react-router-dom";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      Share content todoList
      <Outlet />
    </div>
  );
}

export default TodoFeature;
