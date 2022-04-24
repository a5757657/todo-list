import React, { useState } from "react";
import ModalRemove from "./ModalRemove";

const RemoveBtn = ({ id, content, setTodoList, todoList }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="remove"
      >
        移除
      </button>
      {modal ? (
        <ModalRemove
          setModal={setModal}
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

export default RemoveBtn;
