import React,{ useEffect } from 'react'

export default function Child({renderName}) {

    useEffect(() => {
        console.log("I am called")
    },[renderName])

  return (
    <div>{renderName("Dhanush")}</div>
  )
}
