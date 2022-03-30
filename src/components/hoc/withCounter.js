import React,{ useState } from 'react'


const UpdatedComponent = (OriginalComponent) => {
    function NewComponent({style}) {
        const [count,setCount] = useState(0);

        const incrementCount = () => {
            setCount((count) => count + 1)
        }
        return (
            <OriginalComponent name="Dhanush" incrementCount={incrementCount} count={count} style={style}/>
        )
    }

    return NewComponent;
}

export default UpdatedComponent;
