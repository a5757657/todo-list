import React, { useEffect } from "react";

const CompletedList = ({ setTodoList, todoList }) => {
  let renderList;

  const render = () => {
    let data = todoList;
    const data2 = data.filter((el) => {
      return el.finished === true;
    });

    renderList = data2.map((v) => {
      let a = "";
      const date = new Date();
      const now = date.getTime(); // 當下的毫秒數
      const time = Math.floor((now - v.finishedTime) / 1000); // 這裡是算出完成時間跟幫下的時間差 單位是秒

      if (time < 60) { // 如果時間差在60秒以內就顯示秒數 parseInt是為了取整數
        a = parseInt(time) + "秒";
      } else if (time < 3600 && time >= 60) { // 如果時間差一分鐘跟60分鐘以內就顯示分鐘
        a = parseInt(time / 60) + "分鐘";
      } else if (time >= 3600 && time < 60 * 60 * 24) {// 如果時間差一小時到24小時以內就顯示小時
        a = parseInt(time / (60 * 60)) + "小時"; 
      } else { // 時間超過一天則顯示代辦事項完成的日期
        a =
          date.getFullYear(v.finishedTime) +
          "-" +
          (date.getMonth(v.finishedTime) + 1) + // 要+1才會顯示正確的月份
          "-" +
          date.getDate(v.finishedTime);
      }

      return (
        <div key={v.id} className="completedList">
          <div className="title">{v.content}</div>
          <div className="time">{a}</div>
        </div>
      );
    });
  };
  if (todoList !== null) {
    render();
  }
  return <div className="completedListWrap">{renderList}</div>;
};

export default CompletedList;
