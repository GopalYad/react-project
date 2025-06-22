import { useState } from "react"

const Todo=()=>{
    const[input,setInputValue]=useState('')
    const[store , setStore]=useState([])
    const addTask=()=>{
        setStore([...store,input])
        setInputValue("")
    }
    return(
        <div>
            <h1>Todo</h1>
            <input className="border" type="text" name="todo" value={input} onChange={(e)=>setInputValue(e.target.value)} />
             <button className="border" onClick={addTask}>Add</button>
             <ul>
                {store.map((task,index)=>(
                    <li key={index}>{task}</li>
                ))}
             </ul>
        </div>
    )
}

export default Todo