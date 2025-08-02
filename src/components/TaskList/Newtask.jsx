import React from 'react'

const Newtask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-200 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className=' text-sm bg-red-200 px-3 py-1 rounded'>{data.category}</h3>
            <h4>{data.taskDue}</h4>
        </div>
        <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='flex mt-4'>
            <button className='p-3 text-xl w-full rounded  bg-blue-500'>Accept task</button>
        </div>
    </div>
  )
}

export default Newtask
