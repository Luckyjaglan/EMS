import React, { useContext } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTasks from '../others/AllTasks';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = (props) => {
  const { employees, updateEmployeesState } = useContext(AuthContext);

  const handleTaskCreate = (taskDetails) => {
    const { assignTo, taskTitle, description, taskDue, category } = taskDetails;

    const employeeToUpdate = employees.find(emp => emp.firstName === assignTo);

    if (employeeToUpdate) {
      const updatedEmployees = employees.map(emp => {
        if (emp.firstName === assignTo) {
          const newTask = { taskTitle, description, taskDue, completed: false, newtask: true, accepted: false, failed: false, category };
          return {
            ...emp,
            tasks: [...emp.tasks, newTask],
            taskCount: { ...emp.taskCount, newtask: emp.taskCount.newtask + 1 }
          };
        }
        return emp;
      });

      updateEmployeesState(updatedEmployees);
      return true;
    } else {
      alert(`Invalid Employee: No employee found with the name "${assignTo}"`);
      return false;
    }
  };

  return (
    <div className='bg-[#1C1C1C] h-screen'>
      <Header changeuser={props.changeuser} data={props.data} />
      <CreateTask onTaskCreate={handleTaskCreate} />
      <AllTasks employees={employees} />
    </div>
  );
};

export default AdminDashboard;