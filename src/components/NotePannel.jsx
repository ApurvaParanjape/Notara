import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNote, updateNote } from '../redux/noteSlice';

const NotePannel = (props) => {
    const dispatch = useDispatch();

    const [tag, setTag] = useState("");


    function closePannel(){
        props.setShowNotePannel(false);
    }
  
    function createNote(){
        const note={
            _id: props.noteId || Date.now().toString(36),
            title: props.search,
            content: props.noteContent,
            createdAt: new Date().toISOString(),
            isStarred: false,
            tags:[],
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

    function handleAddTag(){
        if(tag.trim()==="") return;
        else{
            props.setTags([...props.tags, tag.trim()]);
            setTag("");
        }
    }

    function handleRemoveTag(index){
        const updatedTags = props.tags.filter((_, i) => i !== index);
        props.setTags(updatedTags);
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

      <div className='flex w-[100%] justify-center items-center'>
      <input type="text" 
      placeholder='Enter Tags here' 
      className='mx-4 border-2 border-gray-500 w-[73%] h-[6vh] p-2 rounded-[15px]'
      value={tag}
      onChange={(e)=> setTag(e.target.value)}/>

        <button className='mr-3 border-2 border-gray-500 w-[15%] h-[6vh] p-2 rounded-[15px] bg-purple-400' onClick={handleAddTag}>Add Tag</button>
      </div>

      <div className='mr-auto ml-[5%] mt-1 w-[73%] flex items-center justify-start gap-2'>
        {props.tags.map((tag, index) => (
        <div className=' border-2 border-gray-500 w-max text-[10px] h-[6vh] p-2 rounded-[15px] bg-purple-100 flex justify-between items-center gap-3'>
        <span key={index}>
            {tag}
        <button 
        onClick={()=>handleRemoveTag(index)}
        >X</button>
        </span>
        </div>
        ))}
      </div>

      <button className='mx-5 mt-5 border-2 border-gray-500 w-[90%] h-[6vh] p-2 rounded-[15px] bg-purple-400'
      onClick={createNote}
      >{props.noteId? "Update": "Create"}</button>  
    </div>

        
  )
}

export default NotePannel
