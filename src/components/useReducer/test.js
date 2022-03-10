import React,{useReducer} from 'react'

const reducer = (state,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1}
        case 'DECREMENT':
            return { count: state.count - 1}
        default:
            return state
    }
}

export default function UseReducerHook() {
  const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <>
    <div>{state.count}</div>
    <button onClick={() => dispatch({type:'INCREMENT'})}> INCREMENT </button>
    <button onClick={() => dispatch({type:'DECREMENT'})}> DECREMENT </button>
    </>
  )
}
