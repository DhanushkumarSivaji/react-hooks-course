import React from 'react';
import ChildC from './childC';

export default function ChildB({childb, ...rest}) {
  return (
    <>
    <div>{childb}</div>
    <ChildC {...rest}/>
    </>
  )
}
