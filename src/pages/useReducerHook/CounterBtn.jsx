import React, { useContext } from 'react'
import { counterContext } from './Reducer1'

export default function CounterBtn() {
  const btn = useContext(counterContext)
  return (
    <div>
      <button onClick={() => { btn.countDispatch({ type: 'increment', value: 1 }) }} >increment</button>
      <button onClick={() => { btn.countDispatch({ type: 'decrement', value: 1 }) }} >decrement</button>
      <button onClick={() => { btn.countDispatch({ type: 'reset', value: 1 }) }} >reset</button>
    </div>
  )
}
