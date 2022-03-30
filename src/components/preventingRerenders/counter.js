import React from "react";

function Counter({ name, value,onClickIncrement }) {
    console.log(`Rendering counter ${name}`);
    return (
        <div>
            {name}: {value}
            <button onClick={onClickIncrement}>
                    Increment counter
            </button>
        </div>
    );
}

export default React.memo(Counter);