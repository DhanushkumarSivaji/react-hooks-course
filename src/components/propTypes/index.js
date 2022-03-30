import React from 'react';
import PropTypeChecking from './example';

export default function PropTesting() {
    return (
        <div>
            <PropTypeChecking 
                data={{ name: "test" }} 
                shape={{ name: "Dhanush", age: 24 }} 
                aoo={[{ name: "Dhanush", age: 24 }, { name: "Dharma", age: 25 }]} 
            />
        </div>
    )
}
