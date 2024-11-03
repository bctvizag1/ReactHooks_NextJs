import React, { useState } from 'react'

export default function Counter2() {
  const initCount = 0;
  const [count, setCount] = useState(initCount)

  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }

  const increaseFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>


      <h2><span>Count 2: {count}</span></h2>
      <div className="flex">
        <button onClick={() => setCount(initCount)}> Reset </button>
        <button onClick={decreaseCount}> - </button>
        <button onClick={() => setCount(count + 1)}> + </button>
        <button onClick={increaseFive}> inc by 5 </button>
      </div>

    </div>
  )
}
