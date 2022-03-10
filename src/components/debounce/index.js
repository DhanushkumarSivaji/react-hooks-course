import React from 'react';

export default function Debounce() {
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), timeout);
    };
  }

  function fetchData(e) {
    console.log("I am called",e.target.value);
  }

  let fetchDataWithDebounce = debounce((e) => fetchData(e));
  return (
    <div className="App">
      <h1>Debounce Example</h1>
      <input
        type="text"
        placeholder="type something..."
        onChange={(e) => fetchDataWithDebounce(e)}
      />
    </div>
  );
}
