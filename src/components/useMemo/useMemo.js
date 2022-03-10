import React,{ useState,useMemo } from 'react';

export default function Memo() {
    
 const [ count, setCount ] = useState(0)

 const [ headerText , setHeaderText ] = useState('Hello');


 const incrementCounter = () => {
     setCount((count) => {
         return count + 1
     })
 }

 const renderHeaderText = (val) => {
     console.log("This is called")
     return val
 }

 const memoizedFunction = useMemo(() => renderHeaderText(headerText),[headerText])
  return (
      <>
        <h1>{memoizedFunction}</h1>
        {count}
        <button onClick={() => incrementCounter()}>Increment Count</button>
      </>
  );
}
