import React from 'react'
import Note from './Note'
import { useDispatch, useSelector } from 'react-redux'

const Notelist = () => {
  
  const notes = useSelector((state)=>state.note.notes)
  const dispatch = useDispatch();

  
  return (
    <div className='flex ml-[3vw] mt-[2vh] justify-start gap-6 flex-wrap'>
      {
        notes.map((note)=>(
          <Note key={note._id} title={note.title} content={note.content} createdAt={note.createdAt}/>
        ))
      }
    </div>
  )
}

export default Notelist
