import React, { createContext, useContext } from 'react'
import LoanList from './LoanList';

let nextid = 3;
const initLoan = [
  { id: 0, type: 'P', amt: 10000, balance: 0, rate: 12 },
  { id: 1, type: 'P', amt: 1000, balance: 0, rate: 12 },
  { id: 3, type: 'R', amt: 20000, balance: 0, rate: 12 },
]

const LoanContext = createContext(null)

export default function Reducer2() {
  return (
    <div>
      <h2>Reducer 2</h2>
      <LoanContext.Provider value={initLoan}>
        <LoanList ></LoanList>
      </LoanContext.Provider>
    </div>
  )
}

export function useLoanContext() {
  return useContext(LoanContext)
}

