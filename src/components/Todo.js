import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
  let spanStyle =
    todo && todo.completed ? { textDecorationLine: "line-through" } : null;
  // eslint-disable-next-line no-unused-expressions
  return (
    <li
      className="list-group-item"
      onClick={() => {
        toggleTodo(todo.id);
      }}
    >
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span style={spanStyle}>{todo.content}</span>
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
