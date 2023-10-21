import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export default function Example2() {
  const [theme, setTheme] = useState('light');


  return (
    <div>
      <h2>Example2</h2>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input type='checkbox'
            checked={theme === 'dark'}
            onChange={e => { setTheme(e.target.checked ? 'dark' : 'light') }}
          />
          Change theme
        </label>
      </ThemeContext.Provider>
    </div>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Btn>sign up</Btn>
      <Btn>login up</Btn>
    </Panel>
  )

}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

function Btn({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>{children}</button>
  )

}