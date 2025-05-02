import React, { useEffect, useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const Counter = () => {
    const[loading,setLoading]=useState(true);
    const[counter,setCounter]=useState(0)
    useEffect(()=>{
        const timer=setTimeout(() => {
            setLoading(false)
        }, 3000);
        return ()=>clearInterval(timer)
    },[])
    if(loading){
        return(
            <div className='flex justify-center items-center min-h-screen flex-col gap-4 text-3xl font-bold animate-pulse text-blue-500'>
                <h1 className='text-6xl'>Counter App</h1>
                <p className='text-2xl'>A simple tools for counting things and kepp tracks of numbers.</p>
            </div>
        )
    }
  return (
    <section>
   <h1 className='max-w-full text-center'>setting</h1>
<div className='flex justify-between items-center min-h-screen flex-row w-full '>
     <button  className=' mx-4 px-8 py-4 bg-blue-600 rounded-lg cursor-pointer focus:bg-blue-900 hover:bg-blue-500' onClick={()=>setCounter(counter+1)}><CiCirclePlus className='text-4xl font-bold text-white' /></button>
     <h1 className='text-[24rem] text-center bg-gray-500 rounded-3xl text-white'>{counter}</h1>
     <button  className='mx-3 px-8 py-4 bg-blue-600 rounded-lg cursor-pointer focus:bg-blue-900 hover:bg-blue-500' onClick={()=>setCounter(counter+1)}><CiCircleMinus className='text-4xl font-bold text-white '/></button>
   
    </div>
    </section>
   
  )
}

export default Counter
