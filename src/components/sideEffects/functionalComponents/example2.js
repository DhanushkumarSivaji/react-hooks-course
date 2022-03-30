// Running an effect only when a component mounts

import React, { useEffect, useState } from 'react';

const Example2 = () => {

    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } 

    const [ size, setSize] = useState(getSize())

    useEffect(() => {
        function handleSize(){
            setSize({
                width: window.innerWidth,
                height: window.innerHeight 
            })
        }

        window.addEventListener('resize',handleSize)

        return () => window.removeEventListener('resize',handleSize)
    },[])

    return (
        <div>
            width: {size.width} height: {size.height}
        </div>
    )
}

export default Example2;