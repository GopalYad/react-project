import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const timer=setTimeout(() => {
            setLoading(false)
        }, 2000);
        return ()=>clearInterval(timer)
    },[])
    if(loading){
        return(
            <div className='flex justify-center items-center min-h-screen flex-col gap-4'>
                <h1 className='text-6xl'>Counter App</h1>
                <p className='text-2xl'>A simple tools for counting things and kepp tracks of numbers.</p>
            </div>
        )
    }
  return (
    <div>
      counter
    </div>
  )
}

export default Counter
