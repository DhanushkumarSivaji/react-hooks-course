import React,{ useRef } from 'react'

function UncontrolledComponents() {

    let inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus()
        console.log(inputRef.current.value);
    };

  return (
     <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="name" ref={inputRef}/>
            <input type="submit" value="submit"/>
        </form>
     </>
  )
}

export default UncontrolledComponents;