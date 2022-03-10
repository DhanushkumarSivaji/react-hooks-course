import React,{useState,useCallback} from 'react';
import Child from './child';

export default function Callback() {

    const [count,setCount] = useState(0)
    const [title,setTitle] = useState("Hello")

    const renderName =useCallback((name)=>{
        return `${title} ${name}`
    },[title])

  return (
    <>
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <Child renderName={renderName} />
    </>
  )
}
