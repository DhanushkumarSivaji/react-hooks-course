import React,{useState, useCallback} from 'react';
import Child from './child';

export default function Callback() {

 const [ count, setCount ] = useState(0)

 const  [data, setData] = useState('Dhanush')

    const returnTitle = useCallback((title) => {
        return title + data
    },[data])


  return (
      <>
      {count}
      <button onClick={() => setCount((count)=>{ return count + 1})}>Increment Count</button>
      <Child returnTitle={returnTitle}/>
      </>
  );
}
