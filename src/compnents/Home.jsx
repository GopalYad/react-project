import React from 'react'
import counterImg from '../assets/counters.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='min-h-screen  mx-auto pt-12 md:pl-12 px-3'>
      
     <div
     className=' py-6 px-6 max-w-sm bg-white border border-gray-200 rounded-lg shadown-sm dark:bg-white-800 dark:border-white-700 flex  flex-col justify-center items-center'
     >
      <a href="#" className='w-full pl-8 '>
        <img
        className='object-contain rounded-t-lg '
         src={counterImg} alt="" />
      </a>
      <div className=''>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Counter</h5>
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A simple tools for counting things and kepp tracks of numbers.</p>
        <div className='flex '>
        <Link to="/counter"  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details..</Link>
            
            </div>
     </div>
    </section>
  )
}

export default Home
