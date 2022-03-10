import React,{useState} from 'react';

export default function Forms() {

    const [ data,  setData ] = useState({
        name:"",
        email:"",
        password:"",
        gender:"female"
    })

    const handleChange = ({ target: { name, value }}) => {
            setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    const genderData = ["male","female","transgender"]
  return (
      <>
        <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
            <input type="text" name="name" placeholder="enter name" value={data.name} />
            <input type="email" name="email" placeholder="enter email" value={data.email}/>
            <input type="password" name="password" placeholder="enter password" value={data.password}/>
            <select value={data.gender} name="gender" >
                {genderData.map((val,i) => (
                    <option value={val} key={i}>{val}</option>
                ))}
            </select>
            <input type="submit" value="submit"/>
        </form>
      </>
  );
}
