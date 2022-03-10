import React from 'react'
import { data } from './data';
import NestedFolder from './nestedFolder';
function Nested() {
  return (
    <div><NestedFolder data={data}/></div>
  )
}


export default Nested;