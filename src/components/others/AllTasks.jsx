import React from 'react';

// 1. Change the component to accept "employees" as a prop instead of using context
const AllTasks = ({ employees }) => {
  // 2. The useContext hook is no longer needed and has been removed.

  return (
    <div id="alltasks" className='p-5 text-white bg-[#1C1C1C] mt-5'>
      <div className='bg-blue-400 px-2 py-4 flex justify-between rounded mb-2'>
        <h3 className='w-1/5 '>Employee</h3>
        <h3 className='w-1/5 '>New Tasks</h3>
        <h3 className='w-1/5 '>Completed</h3>
        <h3 className='w-1/5 '>Accepted Tasks</h3>
        <h3 className='w-1/5 '>Failed</h3>
      </div>
      <div>
        {/* 3. Map over the "employees" prop passed down from AdminDashboard */}
        {employees && employees.map((elem, idx) => {
          return <div key={idx} className='bg-gray-950 border-1 border-solid px-4 py-4 flex justify-between rounded mb-2'>
            <h3 className='w-1/5 text-white'>{elem.firstName}</h3>
            <h3 className='w-1/5 text-blue-600'>{elem.taskCount.newtask}</h3>
            <h3 className='w-1/5 text-green-700'>{elem.taskCount.completed}</h3>
            <h3 className='w-1/5 text-yellow-500'>{elem.taskCount.accepted}</h3>
            <h3 className='w-1/5 text-red-600'>{elem.taskCount.failed}</h3>
          </div>
        })}
      </div>
    </div>
  );
};

export default AllTasks;