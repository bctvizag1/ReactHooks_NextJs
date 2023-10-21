import React from "react";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";
import styles from "@/styles/Home.module.css";
import Counter2 from "./Counter2";
import Hook3 from "./Hook3";
import HookArray from "./HookArray";

export default function index() {
  return (
    <div className="container mx-auto px-1">
      <h1>useState Hooks</h1>
      <section>
        <ClassCounter></ClassCounter>
        <FunctionCounter></FunctionCounter>
        <Counter2></Counter2>
        <Hook3></Hook3>
        <HookArray></HookArray>
      </section>

      <h1>UseEffect</h1>
    </div>
  );
}
