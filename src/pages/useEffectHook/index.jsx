import React from "react";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";
import styles from "@/styles/Home.module.css";
import Counter2 from "./Counter2";
import Hook3 from "./Hook3";

export default function index() {
  return (
    <div className="container mx-auto px-1">
      <h1>useEffect Hooks</h1>
      <section>
        <ClassCounter></ClassCounter>
        <FunctionCounter></FunctionCounter>
        <Counter2></Counter2>
        <Hook3></Hook3>
      </section>
    </div>
  );
}
