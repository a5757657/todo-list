import { render } from "@testing-library/react";
import React from "react";

const CompletedList = ({ setTodoList, todoList, trigger }) => {
  let renderList;
  const render = () => {
    let data = todoList;
    const data2 = data.filter((el) => {
      return el.finished === true;
    });
    renderList = data2.map((v) => {
      let a = "";
      const date = new Date
      const now = +new Date();
      const time = Math.floor((now - v.finishedTime) / 1000);
      if (time < 60) {
        a = parseInt(time) + "秒";
      } else if (time < 3600 && time >= 60) {
        a = parseInt(time / 60) + "分鐘";
      } else if (time >= 3600 && time < 60 * 60 * 24) {
        a = parseInt(time / (60 * 60)) + "小時";
      } else {
        a = date.getFullYear(v.finishedTime)+'-'+date.getMonth(v.finishedTime)+'-'+date.getDate(v.finishedTime)
        console.log(date.getFullYear(v.finishedTime));
      }
      return (
        <div key={v.id} className="completedList">
          <div className="title">{v.content}</div>
          <div className="time">{a}</div>
        </div>
      );
    });
  };
  render();
  return <div className="completedListWrap">{renderList}</div>;
};

export default CompletedList;
