import React, { useEffect, useState } from 'react';

const ClosuresInReact = () => {
  const [count, setCount] = useState('1');


  const incrementCount = () => {
    setCount(prevCount => +prevCount + 1);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      incrementCount();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [incrementCount]);
  return <div>{`Timer started: ${count}`}</div>;
};


export default ClosuresInReact;