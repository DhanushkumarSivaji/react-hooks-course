import React from 'react'
import UpdatedComponent from './withCounter';

function ClickCounter({name,incrementCount,count}) {
  return (
    <button onClick={() => incrementCount()}>{name} ClickCounter {count}</button>
  )
}

export default UpdatedComponent(ClickCounter);
