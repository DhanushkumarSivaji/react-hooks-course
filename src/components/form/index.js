import React, {useState} from 'react';

export default function Form() {

    const [ data, setData ] = useState({
        username:'',
        email:'',
        password:'',
        gender:'female'
    })

    const handleChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    const genderData = ['male','female','transgender','not to mention']
  return (
      <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="username" placeholder="enter username" value={data.username} onChange={(e) => {handleChange(e)}}/>
            <input type="email" name="email"  placeholder="enter email" value={data.email} onChange={(e) => {handleChange(e)}}/>
            <input type="password" name="password" placeholder="enter password" value={data.password} onChange={(e) => {handleChange(e)}}/>
            <select name="gender" value={data.gender} onChange={(e) => {handleChange(e)}}>
                {genderData.map((val,i) => (
                    <option value={val} key={i}>{val}</option>
                ))}
            </select>
            <input type="submit" value="submit"/>
        </form>
      </>
  );
}
