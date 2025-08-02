import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex flex-col flex-shrink-0 h-full w-[300px] p-5 bg-blue-200 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className=' text-sm bg-red-200 px-3 py-1 rounded'>{data.category}</h3>
        <h4>{data.taskDue}</h4>
      </div>
      <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className='mt-auto'>
        <button className='bg-green-500 py-3 px-2 rounded w-full m-2'>Mark as Completed</button>
        <button className='bg-red-500 py-3 px-2 rounded w-full m-2'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
