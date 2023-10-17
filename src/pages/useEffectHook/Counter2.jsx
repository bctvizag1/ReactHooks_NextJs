import React, { useState } from 'react'

export default function Counter2() {
  const initCount = 0;
  const [count, setCount] = useState(initCount)
  
  const increaseFive  = () => {
    for(let i =0; i<5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <h2>Counter 2</h2>
     
      <button onClick={() => setCount(initCount)}> Reset </button>

      <button onClick={() => setCount(count - 1)}> - </button>

      <span>Count : {count}</span>

      <button onClick={() => setCount(count + 1)}> + </button>
      
      <button onClick={increaseFive}> inc by 5 </button>

    </div>
  )
}
