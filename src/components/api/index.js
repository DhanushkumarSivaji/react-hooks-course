import React,{useEffect, useState} from 'react';
import axios from 'axios';

export default function Api() {

  const [data , setData ] = useState([])

//   useEffect(() => {
//     const getData = async () =>{
//         try{
//             let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//             setData(res.data)
//          }catch(err){
//             console.log("err",err)
//          }
//     }
//     getData()
//   },[])

// useEffect(() => {

//     const getData = async () => {

//         try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         let data = await response.json()
//         setData(data)
//         }catch(err) {
//           console.log("err",err)
//         }
//     }
//     getData()
// })



  return (
      <div>
          {JSON.stringify(data,null,2)}
      </div>
  );
}
