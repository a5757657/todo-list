import React, { useState } from "react";
import ModalComplete from "./ModalComplete";

// 完成按鈕的元件
const CompletedBtn = ({ id, content, setTodoList, todoList }) => {
  const [completeModal, setCompleteModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setCompleteModal(true);
        }}
        className="completed"
      >
        完成
      </button>
      {completeModal ? (
        <ModalComplete
          setCompleteModal={setCompleteModal}
          id={id}
          content={content}
          setTodoList={setTodoList}
          todoList={todoList}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CompletedBtn;
