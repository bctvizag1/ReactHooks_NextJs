import React, { createContext, useReducer } from "react";
import CounterBtn from "./CounterBtn";

import style from "@/styles/Home.module.css";

const initstate = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initstate;
  }
};
export const counterContext = createContext(null);

export default function Reducer1() {
  const [count, dispatch] = useReducer(reducer, initstate);
  return (
    <div>
      <counterContext.Provider
        value={{ count: count, countDispatch: dispatch }}
      >
        <h2>Reducer Example 1</h2>
        <p>Count = {count.firstCounter}</p>
        <div className="flex gap-1">
          <button
            onClick={() => {
              dispatch({ type: "increment", value: 1 });
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch({ type: "decrement", value: 1 });
            }}
          >
            decrement
          </button>
          <button
            onClick={() => {
              dispatch({ type: "reset", value: 1 });
            }}
          >
            reset
          </button>
        </div>
        <hr />
        <CounterBtn></CounterBtn>
      </counterContext.Provider>
    </div>
  );
}
