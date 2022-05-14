import React, { useState, useEffect } from "react";
import Header from "./Header";
import Title from "./Title";
import Todo from "./Todo";

export default function TodoList() {
  const [value, setvalue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Title />
      <div className="container">
        <Header
          value={value}
          setvalue={setvalue}
          todos={todos}
          setTodos={setTodos}
        />
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}
