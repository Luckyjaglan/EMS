import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {

  const existingEmployees = localStorage.getItem('employees');

  if (!existingEmployees) {
    setLocalStorage(); 
  }

  const initialData = getLocalStorage();
  if (initialData) {
    setEmployees(initialData.employees || []);
    setAdmin(initialData.admin || []);
  }
}, []);

  const updateEmployeesState = (newEmployees) => {
    setEmployees(newEmployees);
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  const contextValue = {
    employees,
    admin,
    updateEmployeesState,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;