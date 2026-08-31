import React from 'react'
import Note from './Note'
import { useDispatch, useSelector } from 'react-redux'

const Notelist = (props) => {
  
  const notes = useSelector((state)=>state.note.notes)
  const dispatch = useDispatch();

  const filtered_notes = notes.filter((note)=>{
    const matchesSearch = note.title.toLowerCase().includes(props.searchTerm.toLowerCase())

    const matchesStarred = !props.showStarred || note.isStarred;

    return matchesSearch && matchesStarred;
  }
  )
  
  return (
    <div className='flex ml-[3vw] mt-[2vh] justify-start gap-6 flex-wrap'>
      {/* {
        notes.map((note)=>(
          <Note key={note._id} title={note.title} content={note.content} createdAt={note.createdAt} _id={note._id} note={note} handleEditNote={props.handleEditNote}/>
        ))
      } */}
      {
        filtered_notes.length>0?
        filtered_notes.map((note)=>(
          <Note key={note._id} title={note.title} content={note.content} createdAt={note.createdAt} _id={note._id} note={note} handleEditNote={props.handleEditNote}/>
        ))
        :
        (
          <div>
            {props.showStarred ? "No starred notes" : "No notes found"}
          </div>
  )
      }
    </div>
  )
}

export default Notelist
