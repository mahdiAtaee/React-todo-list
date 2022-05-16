import React from "react";
import TodoItem from "./TodoItem";

export default function Todo({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} todos={todos} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}
