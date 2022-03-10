import React,{useState} from 'react';

export default function NestedFolder({ data }) {

    const [expand,setExpand] = useState(false)

  if(data.isFolder){
    return (
        <>
        <div onClick={() => setExpand(!expand)}>{data.name}</div>
        <br/>
        <div style={{display: expand ? 'block' : 'none'}}>
            {data.items.map((val,i) => <NestedFolder data={val}/>)}
            <br/>
        </div>
        </>
      )
  } else {
      return (
          <>
          <span>{data.name}</span>
          <br/>
          </>
      )
  }

}
