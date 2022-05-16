import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Header({
  value,
  setvalue,
  todos,
  setTodos,
  setStatus,
}) {
  function handleChange(e) {
    setvalue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { text: value, complete: false, id: uuidv4() }]);
    setvalue("");
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button
        className="todo-btn"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        onSubmit={(e) => handleSubmit(e)}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          onChange={(e) => statusHandler(e)}
          className="filter-todo"
        >
          <option value="all">all</option>
          <option value="complete">Complete</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
    </form>
  );
}
