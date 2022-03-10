import React from 'react';

export default function Throtlling() {
    const throttling = (fn, limit) => {
        let flag = true;
        return function(...args){
          if(flag){
            fn.apply(this, args);
            flag = false;
            setTimeout(() => {
              flag=true;
            }, limit);
          }
        }
      }
  function fetchData(e) {
    console.log("I am called",e.target.value);
  }

  let fetchDataWithThrotlling = throttling((e) => fetchData(e),3000);
  return (
    <div className="App">
      <h1>Throtlling Example</h1>
      <input
        type="text"
        placeholder="type something..."
        onChange={(e) => fetchDataWithThrotlling(e)}
      />
    </div>
  );
}
