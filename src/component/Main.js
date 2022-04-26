import React, { useState, useEffect } from "react";
import ToBeCompletedList from "./ToBeCompletedList";
import CompletedList from "./CompletedList";
// 呈現todolist的區塊

const Main = ({ setTodoList, todoList, bgc, setBgc, trigger, setTrigger }) => {
  const toBeCompletedHandler = () => { // 控制tab的樣式
    setBgc(true);
  };
  const completedHandler = () => { // 控制tab的樣式
    setBgc(false);
  };

  return (
    <>
      <main>
        <div className="tabs">
          <div
            onClick={toBeCompletedHandler}
            className={bgc ? "toBeCompleted bgc" : "toBeCompleted"}
          >
            待完成
          </div>
          <div
            onClick={completedHandler}
            className={bgc ? "completed" : "completed bgc"}
          >
            已完成
          </div>
        </div>

        {bgc ? (
          <ToBeCompletedList
            setTodoList={setTodoList}
            todoList={todoList}
            trigger={trigger}
          />
        ) : (
          <CompletedList
            setTodoList={setTodoList}
            todoList={todoList}
            trigger={trigger}
          />
        )}
      </main>
    </>
  );
};

export default Main;
