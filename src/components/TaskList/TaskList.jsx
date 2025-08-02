import React from 'react'
import AcceptTask from './AcceptTask'
import Newtask from './Newtask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[45%] flex items-center flex-nowrap overflow-x-auto gap-5 w-full p-6 mt-10 mb-10 rounded-t-3xl scroll-none'>
        {data.tasks.map((elem,idx)=>{
            if(elem.newtask){return <Newtask key={idx} data={elem} />}
            if(elem.completed){return <AcceptTask key={idx} data={elem} />}
            if(elem.accepted){return <CompleteTask key={idx} data={elem} />}
            if(elem.failed){return <FailedTask key={idx} data={elem} />}
        })}
    </div>
  )
}

export default TaskList
