import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios';

const initState = {
  loading: true,
  erro: '',
  data: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCT_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: action.status
      }
    case 'FETCT_ERROR':
      return {
        loading: false,
        data: {},
        error: `error while fetching data : ${action.payload}`
      }
    default:
      return state

  }
}

function Datafetching() {
  const [state, dispact] = useReducer(reducer, initState);
  const [id, setId] = useState(1);

  useEffect(() => {
    if(id < 1) return;
    const source = axios.CancelToken.source();

    dispact({ type: 'FETCT_SUCCESS', payload: {id}, status: `Loading data for id : ${id}` })

  
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, { cancelToken: source.token })
      .then((res) => {
        dispact({ type: 'FETCT_SUCCESS', payload: res.data, status: 'success' })
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
          return
        }
        // console.log(err.message);
        dispact({ type: 'FETCT_ERROR', payload: err.message })
      })
      .finally(() => {
        source.cancel('Request canceled by cleanup');
      })

    //Return a cleanup function  
    return () => {
      source.cancel('Request canceled by cleanup');
    }

  }, [id])

  const handleChange = (e) => {
    // dispact({ type: 'FETCT_SUCCESS', payload: e.target.value, status: 'Loading data' })
    setId(e.target.value)
  }

  return (
    <div>
      <div className='border-b border-b-blue-500 mb-2 pb-2'>
          <lable>Enter ID : </lable>
          <input type='number' placeholder='Enter Post ID' value={id} onChange={handleChange} />
      </div>
      {state.loading ? 'loading...' : <pre>{JSON.stringify(state.data, null,2)}</pre>}
      {state.error ? state.error : null}
    </div>
  )

}

export default Datafetching