import React, { useState } from "react";
import "./Modal.scss";

const ModalRemove = ({ setModal, id, content, setTodoList, todoList }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const showModal = () => {
    setFadeOut(true);
    setTimeout(() => {
      setModal(false);
    }, 450);
  };

  const removeData = () => {
    setFadeOut(true);
    let data = todoList;
    data = data.filter((el) => el.id !== id);
    window.localStorage.setItem("todolist", JSON.stringify(data));
    setTimeout(() => {
      setTodoList(data);
      setModal(false);
    }, 450);
  };
  return (
    <div className={fadeOut ? "ModalBg fadeoutbg" : "ModalBg"}>
      <div className={fadeOut ? "Modal fadeout" : "Modal"}>
        <div className="title">提示</div>
        <div className="content">是否移除 '{content}' ?</div>
        <div className="btn">
          <div onClick={showModal} className="cancle">
            取消
          </div>
          <div onClick={removeData} className="comfirm">
            確認
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRemove;
