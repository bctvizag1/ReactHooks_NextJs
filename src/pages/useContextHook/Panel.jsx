import React, { useContext } from 'react'
import { ThemeContext } from './Example2';


export default function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <div className={className}>
      <h3 title='this is from panel component'>{title}</h3>
      {children}
    </div>
  )
}
