import React from "react";
import Reducer1 from "./Reducer1";
import Reducer2 from "./Reducer2";
import Datafetching from "./Datafetching";
import TaskManager from "./TaskManager";


export default function index() {
  return (
    <div className="container">
      <section>
        <Reducer1></Reducer1>
        <Reducer2></Reducer2>
        <TaskManager></TaskManager>
        <Datafetching></Datafetching>
      </section>
    </div>
  );
}
