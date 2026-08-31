import React from 'react'
import {useDispatch} from 'react-redux'
import { addNote, updateNote } from '../redux/noteSlice';

const NotePannel = (props) => {
    const dispatch = useDispatch();

    function closePannel(){
        props.setShowNotePannel(false);
    }
  
    function createNote(){
        const note={
            _id: props.noteId || Date.now().toString(36),
            title: props.search,
            content: props.noteContent,
            createdAt: new Date().toISOString(),
            isStarred: false
        }
        console.log("props.noteId:", props.noteId);
        console.log("new ID:", Date.now().toString(36));

        if(props.noteId){
            //updating the paste
            dispatch(updateNote(note))
        }
        else{
            //creating the paste
            dispatch(addNote(note))
        }

        //cleanup
        props.setSearch("");
        props.setNoteContent("");
        props.setNoteID("");

        props.setShowNotePannel(false);

    }

    return (
    <div className={`fixed top-0 right-0 h-screen w-[40vw] z-50 border-2 bg-white flex flex-col items-center transform transition-transform duration-500 ${props.showNotePannel ? "translate-x-0" : "translate-x-full"}`}>
      
      <div className='w-[90%] mt-3 p-2 flex justify-between items-center'>
        <p className='p-2 rounded-[5px] w-[90%] text-center'>Create a New Note</p>
        <button className='p-2 border-2 brder-gray-500 rounded-[5px] w-[7%] text-center'
        onClick={closePannel}
        >&gt;</button>
      </div>
      
      <input className='mx-5 mt-5 border-2 border-gray-500 w-[90%] h-[6vh] p-2 rounded-[15px]'
      type="text" placeholder='Enter title here' 
      value={props.search}
      onChange={(e)=>props.setSearch(e.target.value)}/>

      <textarea className='m-5 border-2 border-gray-500 w-[90%] h-[60vh] p-2 rounded-[15px]'
      type="text" placeholder='Enter content here'
      value={props.noteContent}
      onChange={(e)=> props.setNoteContent(e.target.value)}
      ></textarea>

      <button className='mx-5 mt-5 border-2 border-gray-500 w-[90%] h-[6vh] p-2 rounded-[15px] bg-purple-400'
      onClick={createNote}
      >{props.noteId? "Update": "Create"}</button>  
    </div>

        
  )
}

export default NotePannel
