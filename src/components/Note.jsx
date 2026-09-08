import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote, starNote, updateNote } from '../redux/noteSlice';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid  } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'


const Note = (props) => {
  const dispatch = useDispatch();

  const note = props.note;

   function handleDelete(){
    console.log("delete btn clicked")
    dispatch(removeNote(props._id))
  }

  function handleCopy(){
    navigator.clipboard.writeText(note?.content)
    toast.success("Copied to clipbord")
  }
  
  return (
    <div className='border-2 w-[17vw] h-auto p-5 rounded-[25px] flex flex-col justify-between'>
      
      <h3 className='font-bold p-1'>{props.title}</h3>
      <p className='line-clamp-1'>
        {props.content}
      </p>
      <div className='flex justify-start items-start mt-2 gap-1 flex-wrap'>
        {props.note.tags? props.note.tags?.map((tag, index) => (
        <span key={index}
        className='border-2 rounded-[10px] p-1 border-gray-500'>
          {tag}
        </span>
        )):
        <small>No Tags added</small>}
      </div>
      <small className='mt-2'>
        Last Updated: {new Date(props.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })}
      </small>

      <div className='flex justify-start items-start mt-5 flex-wrap'>
        <button className='m-1'
        onClick={()=>props.handleEditNote(note)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className='m-1'
        onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} style={{color: "rgb(216, 44, 12)",}} />
        </button>
        <button className='m-1'>
          <Link to={`/notes/${note?._id}`}>
              <FontAwesomeIcon icon={faEye} />
          </Link>
        </button>
        <button className='m-1'
        onClick={()=>dispatch(starNote(note._id))}>
          {note.isStarred ? <FontAwesomeIcon icon={faStarSolid} style={{color: "rgb(255, 212, 59)",}} /> :<FontAwesomeIcon icon={faStar} />}
        </button>
        <button className='m-1'
        onClick={handleCopy}>
          <FontAwesomeIcon icon={faCopy}/>
        </button>
      </div>

    </div>
  )
}

export default Note
