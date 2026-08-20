import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote, updateNote } from '../redux/noteSlice';
import toast from 'react-hot-toast';

const Note = (props) => {
  const dispatch = useDispatch();

  const note = props.note;

  function HandleEdit(){
    // dispatch(updateNote(props._id))
    // console.log()
  }

  function handleDelete(){
    console.log("delete btn clicked")
    dispatch(removeNote(props._id))
  }

  function handleCopy(){
    navigator.clipboard.writeText(note?.content)
    toast.success("Copied to clipbord")
  }
  
  return (
    <div className='border-2 w-[15vw] h-[25vh] p-5 rounded-[25px] flex flex-col justify-between'>
      <h3 className='font-bold p-1'>{props.title}</h3>
      <p className='line-clamp-5'>
        {props.content}
      </p>
      <small>{props.createdAt}</small>

      <div className='flex justify-end items-end mt-5'>
        <button className='m-1 border-1'
        onClick={HandleEdit}>E</button>
        <button className='m-1 border-1'
        onClick={handleDelete}>D</button>
        <button className='m-1 border-1'>S</button>
        <button className='m-1 border-1'>St</button>
        <button className='m-1 border-1'
        onClick={handleCopy}>cpy</button>
      </div>
    </div>
  )
}

export default Note
