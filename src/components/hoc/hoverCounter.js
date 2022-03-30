import React from 'react'
import UpdatedComponent from './withCounter';
import NestedComponent from './nestedCounter';


function HoverCounter({name,incrementCount,count,style}) {

  return (
    <>
    <div onMouseOver={() => incrementCount()}>{name} HoverCounter {count}</div>
    {JSON.stringify(style)}
    </>
  )
}

export default  NestedComponent(UpdatedComponent(HoverCounter));