import React, { useState, useRef } from "react";
import Loading from "./Loading";
import Send from "./Send";

const Header = ({ setTodoList, todoList, setBgc, trigger, setTrigger }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const input = useRef();
  const callapi = async () => {
    setError(false);
    setLoading(true);
    setDisabled(true);
    await setTimeout(() => {
      const data = {
        id: +new Date(),
        content: input.current.value,
        finished: false,
        finishedTime: null,
      };
      let a = [];
      
      if (todoList !== null) {
        a = todoList;
      }
      a.push(data);
      localStorage.setItem("todolist", JSON.stringify(a));
      setTodoList(a);
      setLoading(false);
      setBgc(true);
      setDisabled(false);
      setTrigger(trigger + 1);
      input.current.value = "";
    }, 1300);
  };

  const checkInputSend = () => {
    if (input.current.value.trim().length <= 0) {
      setError(true);
    } else {
      callapi();
    }
  };

  const keydownCheckInputSend = (e) => {
    onChangecheckInput();
    if (error === false && e.key === "Enter" && loading === false) {
      callapi();
    }
  };
  const onChangecheckInput = () => {
    if (input.current.value.trim().length <= 0) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <>
      <header>
        <h1>待辦事項</h1>
        <p>
          <span>*</span>項目
        </p>
        <div className="form">
          <input
            onKeyPress={keydownCheckInputSend}
            onChange={onChangecheckInput}
            ref={input}
            className={error ? "noValue" : loading ? "inputDisable" : ""}
            type="text"
            placeholder="請輸入待辦事項"
            disabled={disabled}
          />
          {loading ? <Loading /> : <Send checkInput={checkInputSend} />}
        </div>
        <div className="error">
          <p className={error ? "error" : "error none"}>不得為空值</p>
        </div>
      </header>
    </>
  );
};

export default Header;
