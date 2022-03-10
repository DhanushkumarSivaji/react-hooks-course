import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    
  }, [returnComment]);

  return (
  <>
  {console.log("FUNCTION WAS CALLED")}
  <div>{returnComment("Pedro")}</div>
  </>
  );
}

export default Child;