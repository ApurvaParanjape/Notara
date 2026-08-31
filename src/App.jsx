import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './components/Homepage'
import Notelist from './components/Notelist'
import Note from './components/Note'
import ViewNote from './components/ViewNote'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div className='flex'>
        <Navbar/>
        <div>
          <Homepage/>
          {/* <Notelist/> */}
        </div>
      </div>
    },
    {
      path: "/notes",
      element: 
      <div className='flex'>
        <Navbar/>
        <Notelist/>
      </div>
    },
    {
      path: "/notes/:id",
      element: 
      <div className='flex'>
        <Navbar/>
        {/* <Notelist/> */}
        <ViewNote/>
      </div>
    },
    // {
    //   path: "/starred",
    //   element: 
    //   <div className='flex'>
    //     <Navbar/>
    //     <div>
    //       <Homepage/>
    //       {/* <Notelist/> */}
    //     </div>
    //   </div>
    // },
  ]
)

function App() {

  return (
    <div className='flex max-w-[100vw]'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
