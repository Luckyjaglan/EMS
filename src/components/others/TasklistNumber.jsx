import React from 'react'

const TasklistNumber = ({data}) => {
  return (
    <div className='p-6 grid grid-cols-2 gap-5 mt-6'>
        <div className='px-10 py-6 rounded-xl w-[90%] h-[50%]] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newtask}</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className='px-10 py-6 rounded-xl w-[90%] h-[50%]] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.accepted}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='px-10 py-6 rounded-xl w-[90%] h-[50%]] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='px-10 py-6 rounded-xl w-[90%] h-[50%]] bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div> 
  )
}

export default TasklistNumber
