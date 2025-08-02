import React, { useState, useEffect } from 'react';
import Header from '../others/Header';
import TasklistNumber from '../others/TasklistNumber';
import TaskList from '../TaskList/Tasklist';

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState(props.data);

  useEffect(() => {
    const handleSync = () => {
      console.log("Tab focused, syncing employee data...");
      const allEmployees = JSON.parse(localStorage.getItem('employees')) || [];
      const freshData = allEmployees.find(emp => emp.id === props.data.id);
      
      if (freshData) {
        setEmployeeData(freshData);
      }
    };

    window.addEventListener('focus', handleSync);

    return () => {
      window.removeEventListener('focus', handleSync);
    };
  }, [props.data.id]);

  return (
    <div className='bg-[#1C1C1C] h-screen w-full'>
      <Header changeuser={props.changeuser} data={employeeData} />
      <TasklistNumber data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;