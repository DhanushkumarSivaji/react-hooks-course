import React,{useEffect} from 'react';

export default function Child({returnTitle}) {

    // useEffect(() => {
        
    // },[returnTitle])
  return (
      <>
        {console.log("I am called")}
        {returnTitle('Hi')}
      </>
  );
}
