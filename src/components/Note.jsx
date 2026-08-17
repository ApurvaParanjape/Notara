import React from 'react'

const Note = (props) => {
  return (
    <div className='border-2 w-[15vw] h-[25vh] p-5 rounded-[25px]'>
      <h3 className='font-bold p-1'>{props.title}</h3>
      <p className='line-clamp-5'>
        {props.content}
      </p>
      <small>{props.createdAt}</small>
    </div>
  )
}

export default Note
