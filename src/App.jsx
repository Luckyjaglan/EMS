import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  // localStorage.clear()

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []);


  const handleLogin = (email, password)=>{
    if(authData && authData.admin.find((e)=>email == e.email && e.password == password)){
      const admin = authData.admin.find((e)=>email == e.email)
      if(admin){
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data: admin})) 
      }
    }
    else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee})) 
      }
    }else{
      alert('Invalid Credentials')
    }
  }

  return (
    <>
    {!user ? <Login handlelogin={handleLogin}/>:''}
    {user == 'admin'? <AdminDashboard changeuser={setUser} data={loggedInUserData}/> : (user == 'employee' ?<EmployeeDashboard changeuser={setUser} data={loggedInUserData}/>: null) }
    </>
)}

export default App
