import React, { useState, useEffect } from "react";
import Header from "./Header";
import Title from "./Title";
import Todo from "./Todo";

export default function TodoList() {
  const [value, setvalue] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodo();
  }, []);

  useEffect(() => {
    saveLocalTodo();
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilterTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "uncomplete":
        setFilterTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <Title />
      <div className="container">
        <Header
          value={value}
          setvalue={setvalue}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <Todo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </>
  );
}
