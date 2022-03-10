import React from 'react';
import ChildB from './childB';

export default function ChildA({childa , ...rest}) {
  return (
    <>
    <div>{childa}</div>
    <ChildB {...rest}/>
    </>
  )
}
