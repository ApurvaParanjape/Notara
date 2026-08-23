import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewNote = () => {
  
    const {id} = useParams();

    const notes = useSelector((state)=> state.note.notes);

    const note = notes.find((note)=> note._id === id);

  
    return (
    <div>
      <p>{note.title}</p>
      <p>{note.content}</p>
    </div>
  )
}

export default ViewNote
