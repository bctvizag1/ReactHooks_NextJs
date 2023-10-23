import React from 'react'
import Link from "next/link";

import style from './Navbar.module.css'


export default function NavBar() {
  return (
    <header className={style.NavBar}>
      <h1>Rect Hooks with Next JS</h1>
      <ol>
        <li>
          <Link rel="stylesheet" href="/useStateHook" >
            UseState Hook
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/useContextHook" >
            UseContext Hook
          </Link>
        </li>
      </ol>
    </header>
  )
}
