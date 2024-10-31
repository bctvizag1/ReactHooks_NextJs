import React, { useReducer } from 'react'

const initialState = {
  firstName: 'Rao',
  lastName: '',
  password: '',
  repeatPassword: '',
  email: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeValue':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CustomInput({ type = "text", labelText, value, id, onChange, ...otherProps }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="border p-2 rounded"
        {...otherProps}
      />
    </div>
  )
}

const Reducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (field) => (e) => {
    dispatch({
      type: "changeValue",
      field: field,
      value: e.target.value
    })
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          labelText="First Name"
          id="firstName"
          value={state.firstName}
          onChange={handleChange('firstName')}
        />
        <CustomInput
          labelText="Last Name"
          id="lastName"
          value={state.lastName}
          onChange={handleChange('lastName')}
        />
      </div>

      <hr className="my-4" />
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export default Reducer2