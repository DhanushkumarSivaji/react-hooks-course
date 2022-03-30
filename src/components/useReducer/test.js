import React,{useReducer,useState,useMemo} from 'react';

const reducer = (state,action) => {
  switch(action.type){
    case 'INCREMENT':
      return {...state,count: state.count + 1}
    case 'DECREMENT':
      return {...state,count: state.count - 1}
    default:
      return state
  }
}

const TestReducer = ( ) => {
  const [state,dispatch] = useReducer(reducer,{count: 0})
  const [name,setName] = useState('Dhanush')

  const renderUserName = useMemo(() => {
     return name
  },[name])

  return (
    <>
      {state.count}
      {renderUserName()}
      <button onClick={() => dispatch({type:'INCREMENT'})}>Increase Count</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>Decrease Count</button>
    </>
  )
}

export default TestReducer;