import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import NotePannel from './NotePannel';
import Notelist from './Notelist';

const Homepage = () => {
  const [search, setSearch] = useState();
  const [noteContent, setNoteContent] = useState();
  const [showNotePannel, setShowNotePannel] = useState(false);
  const [noteID, setNoteID] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // const noteId = searchParams.get("noteId");
  const showStarred = searchParams.get("filter") === "starred";

  function handleEditNote(note){
    setNoteContent(note?.content);
    setSearch(note?.title);
    setNoteID(note?._id);

    setShowNotePannel(true);
  }

  return (
    <div>

      <div>
      <button className='ml-[3vw] border-2 p-2 rounded-[15px] border-gray-500'
      onClick={()=>setShowNotePannel(!showNotePannel)}
      >
        {noteID? "Update Note": "Create Note"}
      </button>

      <input className='m-1 border-2 border-gray-500 w-[60vw] h-[6vh] p-2 rounded-[15px]'
      type="text" placeholder='Enter title here' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>

      </div>

      <NotePannel showNotePannel={showNotePannel} setShowNotePannel={setShowNotePannel} search={search} setSearch={setSearch} noteContent={noteContent} setNoteContent={setNoteContent} noteId={noteID} setNoteID={setNoteID}/>

      <Notelist handleEditNote={handleEditNote} searchTerm={searchTerm} showStarred={showStarred}/>
    </div>
  )
}

export default Homepage
