import React, { useReducer, useEffect } from 'react'
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
        error: 'SUCCESS'
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
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicde.com/posts/1')
      .then((res) => {
        dispact({ type: 'FETCT_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        // console.log(err.message);
        dispact({ type: 'FETCT_ERROR', payload: err.message })
      })
  }, [])

  return (
    <div>
      {state.loading ? 'loading...' : state.data.title}
      {state.error ? state.error : null}
    </div>
  )

}

export default Datafetching