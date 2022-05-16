import React from "react";

export default function TodoItem({ todos, todo, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  }

  if (todo) {
    return (
      <div className="todo">
        <li className={`todo-item ${todo.complete ? "complete" : ""}`}>
          {todo.text}
        </li>
        <button className="completeBtn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button className="fallBtn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  } else {
    return null;
  }
}
