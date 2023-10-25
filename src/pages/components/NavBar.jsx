import React from 'react'
import Link from "next/link";

// import style from './NavBar.module.css'
import style from "@/styles/NavBar.module.css";


export default function NavBar() {
  return (
    <header className="NavBar">
      <h1>Rect Hooks with Next JS</h1>
      <ol>
        <li>
          <Link rel="stylesheet" href="/" >Home</Link>
        </li>

        <li>
          <Link rel="stylesheet" href="/useStateHook" >UseState Hook</Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/useContextHook" >UseContext Hook</Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/useReducerHook" >UseReducer Hook</Link>
        </li>
      </ol>
    </header>
  )
}
