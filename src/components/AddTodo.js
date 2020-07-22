import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

export function AddTodo(props) {
  const [input, setInput] = useState("");

  const updateInput = (input) => setInput(input);
  const handleAddTodo = () => {
    props.addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="btn btn-primary" onClick={handleAddTodo}>
        Add a Todo
      </button>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
