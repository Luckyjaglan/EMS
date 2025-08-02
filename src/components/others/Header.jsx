import React from 'react'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeuser('')
    // window.location.reload()
  }

  return (
    <div
    className='flex items-end justify-between px-6 pt-4 pb-2 bg-emerald-300 w-full'>
      <h1 className='text-white text-2xl'>Hello,<br /><span className='text-3xl font-semibold'>{props.data.firstName}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
