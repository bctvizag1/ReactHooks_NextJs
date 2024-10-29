import React, { useState } from 'react'

let intialItem = { id: '', value: '' }

export default function HookArray() {
  const [array1, setArray1] = useState([])
  const [item, setItem] = useState(intialItem)
  const [isEdit, setIsEdit] = useState(false)


  const BtnAddUpdateClick = () => {

    // setArray1([...array1, {
    //   id: array1.length + 1,
    //   value: Math.floor(Math.random()*10) + 1
    // }])
    if (!isEdit) {
      if (item.id && item.value) {
        setArray1([...array1, item])
        setItem(intialItem)

      }
    } else {
      const newArray = [...array1];
      let itemIndex = newArray.findIndex(e => e.id === item.id);
      newArray[itemIndex] = item;
      setArray1(newArray);
      setIsEdit(false);
      setItem(intialItem)

    }

  }

  return (
    <div>
      <h2>HookArray</h2>
      <div className='flex'>

        <input type="text" value={item.id} disabled={isEdit}
          onChange={e => setItem({ ...item, id: e.target.value })} />

        <input type="text" value={item.value}
          onChange={e => setItem({ ...item, value: e.target.value })} />

        <button onClick={BtnAddUpdateClick}> {isEdit ? 'Update' : 'Add'} </button>




      </div>

      <ul>
        {array1.map(a => (
          <li key={a.id} className='grid grid-cols-4 '>
            <span>{a.id} </span> <span>{a.value}</span>

            <button className='bg-lime-600' onClick={() => {
              setItem(a);
              setIsEdit(true);
            }}>  Select </button>

            <button onClick={() => { setArray1(array1.filter(x => x.id !== a.id)) }}>  Delete </button>


          </li>
        ))}
      </ul>
      <hr />
      <div>
        {/* {JSON.stringify(item)} */}
      </div>
    </div>
  )
}
