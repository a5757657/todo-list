import React, { useState } from "react";
import "./Modal.scss";

const ModalComplete = ({
  id,
  content,
  setTodoList,
  todoList,
  setCompleteModal,
}) => {
  const [fadeOut, setFadeOut] = useState(false);
  const showModal = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCompleteModal(false);
    }, 500);
  };

  const completeData = () => {
    let data = todoList;
    const data2 = data.map((el) => {
      if (el.id === id) {
        el.finished = true;
        el.finishedTime = +new Date();
      }
      return el;
    });
    window.localStorage.setItem("todolist", JSON.stringify(data2));
    setFadeOut(true);
    setTimeout(() => {
      setTodoList(data2);
      setCompleteModal(false);
    }, 500);
  };
  return (
    <div className={fadeOut ? "ModalBg fadeoutbg" : "ModalBg"}>
      <div className={fadeOut ? "Modal fadeout" : "Modal"}>
        <div className="title">提示</div>
        <div className="content">是否完成 '{content}' ?</div>
        <div className="btn">
          <div onClick={showModal} className="cancle">
            取消
          </div>
          <div onClick={completeData} className="comfirm">
            確認
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComplete;
