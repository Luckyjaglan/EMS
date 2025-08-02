import React, { useState } from 'react';

// 1. Receive the onTaskCreate function as a prop
const CreateTask = ({ onTaskCreate }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskDue, setTaskDue] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  // 2. The submit handler now just calls the function from the parent
  const submitHandler = (e) => {
    e.preventDefault();

    // Pass all the state data up to the parent component's handler function
    const success = onTaskCreate({
      taskTitle,
      description,
      taskDue,
      assignTo,
      category,
    });

    // 3. If the parent function returns true, clear the form
    if (success) {
      setAssignTo('');
      setCategory('');
      setTaskDue('');
      setDescription('');
      setTaskTitle('');
    }
  };

  return (
    <div className='p-6 bg-[#1C1C1C] w-full'>
      {/* The form's onSubmit now calls our new, simplified handler */}
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between mt-4 bg-gray-900 px-5 rounded text-white '>
        <div className='w-1/2 mt-2'>
          <div>
            <h3 className='mt-4'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='bg-transparent text-white border outline-none placeholder:text-gray-400 w-3/5 mt-1 pl-1 rounded'
              type="text"
              placeholder=' Make a task' />
          </div>
          <div>
            <h3 className='mt-4'>Date</h3>
            <input
              value={taskDue}
              onChange={(e) => setTaskDue(e.target.value)}
              className='bg-transparent text-white border outline-none placeholder:text-gray-400 w-3/5 mt-1 pl-1 rounded'
              type="date" />
          </div>
          <div>
            <h3 className='mt-4'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='bg-transparent text-white border outline-none placeholder:text-gray-400 w-3/5 mt-1 pl-1 rounded'
              type="text"
              placeholder=' employee name' />
          </div>
          <div>
            <h3 className='mt-4'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='bg-transparent text-white border outline-none placeholder:text-gray-400 w-3/5 mt-1 pl-1 rounded'
              type="text"
              placeholder=' design, dev, etc' />
          </div>
        </div>
        <div className='w-1/2 mt-4 flex flex-col items-start'>
          <h3>Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='bg-transparent text-white border mt-1 mr-3 w-full pl-1  rounded  placeholder:text-gray-400'
            placeholder=' Write description of the task'
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 mb-5 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;