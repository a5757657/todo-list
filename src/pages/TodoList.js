import React, { useState, useRef } from "react";
import "./../style/TodoList.scss";
import Header from "../component/Header";
import Main from "../component/Main";

const TodoList = () => {
  const [bgc, setBgc] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [trigger, setTrigger] = useState(0);
  return (
    <div className="todo_list">
      <Header
        setTodoList={setTodoList}
        todoList={todoList}
        setBgc={setBgc}
        trigger={trigger}
        setTrigger={setTrigger}
      />
      <Main
        setTodoList={setTodoList}
        todoList={todoList}
        bgc={bgc}
        setBgc={setBgc}
        trigger={trigger}
      />
    </div>
  );
};

export default TodoList;
