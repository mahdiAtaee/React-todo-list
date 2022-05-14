import React from "react";

export default function TodoItem({ todos, todo, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  return (
    <div className="todo">
      <li className="todo-item">{todo.text}</li>
      <button className="completeBtn">
        <i className="fas fa-check"></i>
      </button>
      <button className="fallBtn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
