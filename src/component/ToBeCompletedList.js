import React, { useEffect } from "react";
import CompletedBtn from "./CompletedBtn";
import RemoveBtn from "./RemoveBtn";

const ToBeCompletedList = ({ setTodoList, todoList, trigger }) => {
  useEffect(() => {
    let a = true;

    if (a) {
      const data = JSON.parse(localStorage.getItem("todolist"));
      setTodoList(data);
    }

    return () => {
      a = false;
    };
  }, []);

  useEffect(() => {
    let a = true;

    if (a) {
      render();
    }

    return () => {
      a = false;
    };
  }, [trigger]);

  if (todoList === null) {
    return;
  }
  let renderList;
  const render = () => {
    const data = todoList.filter((el)=>{
      return el.finished === false
    })
    renderList = data.map((v, i) => {
      return (
        <div key={v.id} className="toBeCompletedList">
          <div className="title">{v.content}</div>
          <div className="btn-group">
            <RemoveBtn
              id={v.id}
              content={v.content}
              setTodoList={setTodoList}
              todoList={todoList}
            />
            <CompletedBtn
              id={v.id}
              content={v.content}
              setTodoList={setTodoList}
              todoList={todoList}
            />
          </div>
        </div>
      );
    });
  };
  render();
  return <div className="toBeCompletedListWrap">{renderList}</div>;
};

export default ToBeCompletedList;
