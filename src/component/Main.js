import React, { useState, useEffect } from "react";
import ToBeCompletedList from "./ToBeCompletedList";
import CompletedList from "./CompletedList";

const Main = ({ setTodoList, todoList, bgc, setBgc, trigger, setTrigger }) => {
  const toBeCompletedHandler = () => {
    setBgc(true);
  };
  const completedHandler = () => {
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
