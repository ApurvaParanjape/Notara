import React from 'react'
import { NavLink } from 'react-router-dom'
import noteLogo from '../assets/notaraLogo1.png'
import { getTagColor } from '../redux/utils/tagColor'
import { useSearchParams } from 'react-router-dom'

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterTag(tag){
    if(tag===""){
      searchParams.delete("tag");
    }
    else{
      searchParams.set("tag", tag)
    }
  }

  return (
    <div className='flex flex-col gap-4 items-center h-[100vh] w-[20vw] shrink-0 fixed top-0 left-0 h-screen bg-gray-100 '>
      <div className='flex h-auto justify-center items-center'>
        <img className='h-[11vh]' src={noteLogo} alt="" />
        <h1 className="text-[5vh] font-bold h-[10vh] flex items-center">Notara</h1>
      </div>
      <hr className="border-t border-gray-300 my-0 w-95/100" />

      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/notes">All Notes</NavLink> */}
      <NavLink to="/?filter=starred">Starred</NavLink>
      {/* <NavLink>Trash</NavLink> */}

      <hr className="border-t border-gray-300 my-0 w-95/100" />

      <p>Filter by Tag</p>
      <div className=' w-[60%] flex gap-2 flex-wrap justify-evenly items-center'>
        <NavLink to="/?tag=Study" className={`border-2 w-[38%] text-center rounded-[10px] p-1 ${getTagColor("Study")}`}
        // onClick={handleFilterTag("Study")}
        >Study</NavLink>
        <NavLink to="/?tag=Work" className={`border-2 w-[38%] text-center rounded-[10px] p-1 ${getTagColor("Work")}`}
        // onClick={handleFilterTag("Work")}
        >Work</NavLink>
        <NavLink to="/?tag=Personal" className={`border-2 w-[38%] text-center rounded-[10px] p-1 ${getTagColor("Personal")}`}
        // onClick={handleFilterTag("Personal")}
        >Personal</NavLink>
        <NavLink to="/?tag=Home" className={`border-2 w-[38%] text-center rounded-[10px] p-1 ${getTagColor("Home")}`}
        // onClick={handleFilterTag("Home")}
        >Home</NavLink>
        <NavLink to="/?tag=Others" className={`border-2 w-[38%] text-center rounded-[10px] p-1 ${getTagColor("Others")}`}
        // onClick={handleFilterTag("Others")}
        >Others</NavLink>
      </div>

    </div>
  )
}

export default Navbar
