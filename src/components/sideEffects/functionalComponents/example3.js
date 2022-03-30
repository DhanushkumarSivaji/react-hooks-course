// Controlling when an effect runs by specifying dependencies
import React,{ useState, useEffect } from 'react'

 function Example3() {

    const [ user, setUser] = useState(localStorage.getItem('user') || 'dhanush')
  

    const handleChange = (e) => {
        setUser(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem('user',user)
    },[user])

    const names = ["dhanush","kumar","sivaji"]
  
  return (
    <div>
        <select value={user} onChange={(e) => handleChange(e)}>
                {names.map((val,i) => (
                    <option value={val} key={i}>{val}</option>
                ))}
        </select>
    </div>
  )
}

export default Example3;