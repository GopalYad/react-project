import React from 'react'
import { useState} from 'react'
const Manipulation = () => {
    const[textColor,setTextColor]=useState('black')
    const[counter,setCounter]=useState(0)
  return (
    <div>
        <div>
        <h1  style={{color:textColor}}>change the color</h1>
        <button onClick={()=>setTextColor(textColor==='black'?"red":'black')}>change</button>
        </div>
        <div>
            <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Manipulation