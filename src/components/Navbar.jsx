import React from 'react'
import { NavLink } from 'react-router-dom'
import noteLogo from '../assets/notaraLogo1.png'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-4 border-2 border-black items-center h-[100vh] w-[20vw] shrink-0 sticky top-0 '>
      <div className='flex h-auto justify-center items-center'>
        <img className='h-[11vh]' src={noteLogo} alt="" />
        <h1 className="text-3xl font-bold h-[10vh] flex items-center">Notara</h1>
      </div>
      <hr className="border-t border-gray-300 my-0 w-95/100" />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/notes">All Notes</NavLink>
      {/* <NavLink>Shared</NavLink> */}
      {/* <NavLink>Trash</NavLink> */}
    </div>
  )
}

export default Navbar
