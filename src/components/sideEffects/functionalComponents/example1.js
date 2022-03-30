// Run side effects after every render

import React,{ useEffect,useState } from 'react'

function Example1() {
const greetings = ["Hi there","Hello there","Ciao","Vannakkam"]
const [index,setIndex] = useState(0)

useEffect(()=>{
    document.title = greetings[index]
})

function updateGreeting(){
    setIndex(Math.floor(Math.random()*greetings.length))
}
  return (
    <button onClick={updateGreeting}>Change title</button>
  )
}

export default Example1