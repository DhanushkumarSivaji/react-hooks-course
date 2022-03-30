import React, { useEffect ,useState } from 'react'

 const UpdatedComponent = ( OriginalComponent ) => {


   function NestedComponent() {
       const [size , setSize] = useState(getSize())

       function getSize(){
           return {
               width: window.innerWidth,
               height: window.innerHeight
           }
       }

       useEffect(() => {
           const handleSize = () => {
            setSize ({
                width: window.innerWidth,
                height: window.innerHeight
            } )
           }
           window.addEventListener('resize',handleSize)
           return () => window.removeEventListener('resize',handleSize)
       },[])

        return <OriginalComponent style={size}/>
      }

      return NestedComponent
}

export default UpdatedComponent;
