import React, { useState, useRef } from "react";
import Loading from "./Loading";
import Send from "./Send";

const Header = ({ setTodoList, todoList, setBgc, trigger, setTrigger }) => {
  const [error, setError] = useState(false); // 表單驗證的狀態
  const [loading, setLoading] = useState(false); // 送出按鈕呈現loading的狀態
  const [disabled, setDisabled] = useState(false); // input呈現disabled的狀態
  const input = useRef();// 抓實體DOM

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
      setBgc(true); //送出後顯示未完成的清單
      setDisabled(false);
      setTrigger(trigger + 1); // 觸發Main元件Render
      input.current.value = "";

    }, 1300);
  };

  //按下送出時的表單驗證及寫入資料
  const checkInputSend = () => {
    if (input.current.value.trim().length <= 0) {
      setError(true);
    } else {
      callapi();
    }
  };

  //按下Enter時的表單驗證及寫入資料
  const keydownCheckInputSend = (e) => {
    onChangecheckInput();
    if (error === false && e.key === "Enter" && loading === false) {
      callapi();
    }
  };

  //input onChange的表單驗證
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
