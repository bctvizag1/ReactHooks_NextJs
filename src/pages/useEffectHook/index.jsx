import React from "react";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";
import styles from "@/styles/Home.module.css";

export default function index() {
  return (
    <div>
      <h1>useEffect Hooks</h1>
      <section>
        <ClassCounter></ClassCounter>
        <FunctionCounter></FunctionCounter>
      </section>
    </div>
  );
}
