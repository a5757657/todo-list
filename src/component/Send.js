import React from 'react'

// 送出按鈕的元件
const Send = ({checkInput}) => {
  return (
    <button onClick={checkInput}>送出</button>
  )
}

export default Send