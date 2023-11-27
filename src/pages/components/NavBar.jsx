import React from "react";
import Link from "next/link";

import style from "@/styles/NavBar.module.css";

export default function NavBar() {
  return (
    <header className="flex justify-between border-b-2 border-b-black">
      <h1 className="text-3xl font-extrabold">Rect Hooks with Next JS</h1>
      <ol className="flex gap-2 [&>li]:bg-blue-300  [&>li]:px-2 [&>li]:pb-2">
        <li className="hover:bg-green-300">
          <Link rel="stylesheet" href="/expenseTracker">
            Home
          </Link>
        </li>

        <li className="hover:bg-green-300">
          <Link rel="stylesheet" href="/useStateHook">
            UseState Hook
          </Link>
        </li>
        <li className="hover:bg-green-300">
          <Link rel="stylesheet" href="/useContextHook">
            UseContext Hook
          </Link>
        </li>
        <li className="hover:bg-green-300">
          <Link rel="stylesheet" href="/useReducerHook">
            UseReducer Hook
          </Link>
        </li>
      </ol>
    </header>
  );
}
