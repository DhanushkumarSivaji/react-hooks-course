import React, { useCallback } from "react";
import Counter from "./counter";

function App() {
    const [counterA, setCounterA] = React.useState(0);
    const [counterB, setCounterB] = React.useState(0);
  
    return (
      <div>
        <Counter name="A" value={counterA} onClickIncrement={useCallback(() => setCounterA(counterA + 1),[counterA])}/>
        <Counter name="B" value={counterB} onClickIncrement={useCallback(() => setCounterB(counterB + 1),[counterB])}/>
      </div>
    );
  }


export default App;
