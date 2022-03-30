

import React from "react";
import Input from "./input";

function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}

export default function App() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h1>☃️ Temperature Converter 🌞</h1>
      <br/>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <br/>
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

// A render prop is a prop on a component, 
// which value is a function that returns a JSX element. 
// The component itself does not render anything besides the render prop.
// Instead, the component simply calls the render prop, 
// instead of implementing its own rendering logic.

//cons
//Since we can't add lifecycle methods to a render prop, 
//we can only use it on components that don't need to alter the data they receive.