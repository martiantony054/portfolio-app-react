import React, { useState } from 'react'
import Home from '../Home'
import i from '../../assets/martin.jpeg'
function Img() {
    const [imagess,setImagess] = useState({
        "pic":[
            {
                src:i
            }
            
        ]
    })
  return (
    <div>
      <Home f ={imagess.pic}/>
    </div>
  )
}

export default Img
