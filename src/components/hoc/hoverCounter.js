import React from 'react'
import UpdatedComponent from './withCounter';

function HoverCounter({name,incrementCount,count}) {

  return (
    <div onMouseOver={() => incrementCount()}>{name} HoverCounter {count}</div>
  )
}

export default UpdatedComponent(HoverCounter);