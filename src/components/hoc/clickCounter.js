import React from 'react'
import UpdatedComponent from './withCounter';
import NestedComponent from './nestedCounter';

function ClickCounter({name,incrementCount,count,style}) {
  return (
    <>
    <button  style={{backgroundColor:'black',color:'white'}} onClick={() => incrementCount()}>{name} ClickCounter {count}</button>
    {JSON.stringify(style)}
    </>
  )
}

export default NestedComponent(UpdatedComponent(ClickCounter));
