import React from "react";
// 按鈕呈現loading狀態時的元件

const Loading = () => {
  return (
    <div className="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#fff"
          d="M14.109 1.434a9.5 9.5 0 0 1 4.278 4.104l-.873.406a8.539 8.539 0 1 0 .325 7.441l.905.33a9.5 9.5 0 1 1-4.635-12.28Z"
        />
      </svg>
    </div>
  );
};

export default Loading;
