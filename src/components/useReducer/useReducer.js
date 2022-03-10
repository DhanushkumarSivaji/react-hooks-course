import React,{useReducer} from 'react';

const reducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default function Reducer() {
 const [ state,dispatch ] = useReducer(reducer,{ count:0 })

  return (
      <>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      </>
  );
}







