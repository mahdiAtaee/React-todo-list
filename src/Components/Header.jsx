import React, { useState, useEffect } from "react";

export default function Header({ value, setvalue, todos, setTodos }) {
  function handleChange(e) {
    setvalue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { text: value, complete: false }]);
    setvalue("");
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
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">all</option>
          <option value="complete">Complete</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
    </form>
  );
}
