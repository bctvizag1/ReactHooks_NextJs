import React, { useState } from 'react'
import { useLoanContext } from './Reducer2'

export default function LoanList() {
  const data = useLoanContext()
  const [isEditable, setEditable] = useState(false)

  return (
    <div>
      <h2>LoanList</h2>

      {JSON.stringify(data)}
    </div>
  )
}
