import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
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
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const ViewNote = () => {
  
    const {id} = useParams();

    const notes = useSelector((state)=> state.note.notes);

    const note = notes.find((note)=> note._id === id);

  
    return (
    <div className='ml-[3vw] w-[78vw] h-screen'>
      <div className='flex justify-between items-center mx-[3vw] my-[2vh] '>
        <div className=''>
          <button className='border-2 p-2 rounded-[15px] border-gray-500'>
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='mr-1'/>Back</Link>
          </button>
        </div>

        <div className='flex justify-start items-start gap-3 flex-wrap'>
        <button className='m-1'
        // onClick={()=>props.handleEditNote(note)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        
        <button className='m-1'
        onClick={()=>dispatch(starNote(id))}>
          {note.isStarred ? <FontAwesomeIcon icon={faStarSolid} style={{color: "rgb(255, 212, 59)",}} /> :<FontAwesomeIcon icon={faStar} />}
        </button>
        <button className='m-1'
        // onClick={handleCopy}
        >
          <FontAwesomeIcon icon={faCopy}/>
        </button>
      </div>
      </div>
      <div className='mx-[3vw] my-[2vh]'>

      <p>{note.title}</p>
      <small className='mt-2'>
        Last Updated: {new Date(note?.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })}
      </small>
      <hr className="border-t border-gray-300 my-0 w-full" />
      <p className='my-[2vh]'>{note.content}</p>
      </div>
    </div>
  )
}

export default ViewNote
