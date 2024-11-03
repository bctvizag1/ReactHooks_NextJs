import React from 'react'

function UseRef1() {
  const [name, setName] = React.useState('')
  const preValue = React.useRef('')
  const inputRef = React.useRef(null)
  const renderCount = React.useRef(0)

  React.useEffect(() => {
    preValue.current = name
  }, [name])

  React.useEffect(() => {
    renderCount.current = renderCount.current + 1
  })



  const handleClick = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <h2>UseRef Example 1</h2>
      <input type="text" placeholder='Enter Name' ref={inputRef} 
        value={name} onChange={e => setName(e.target.value)} />
        <p>Current Name : {name}</p>
        <p>PreValue : {preValue.current}</p>
        <p>Render Count : {renderCount.current}</p>
      <button onClick={handleClick}>Set focus</button>
    </div>
  )
}

export default UseRef1