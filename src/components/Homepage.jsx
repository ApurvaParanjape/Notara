import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import NotePannel from './NotePannel';

const Homepage = () => {
  const [search, setSearch] = useState();
  const [noteContent, setNoteContent] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("noteId");
  const [showNotePannel, setShowNotePannel] = useState(false);

  return (
    <div>

      <div>
      <button className='m-5 border-2 p-2 rounded-[15px] border-gray-500'
      onClick={()=>setShowNotePannel(!showNotePannel)}
      >
        {noteId? "Update Note": "Create Note"}
      </button>

      <input className='m-1 border-2 border-gray-500 w-[60vw] h-[6vh] p-2 rounded-[15px]'
      type="text" placeholder='Enter title here' value={search} onChange={(e)=> setSearch(e.target.value)}/>

      </div>

      <NotePannel showNotePannel={showNotePannel} setShowNotePannel={setShowNotePannel} search={search} setSearch={setSearch} noteContent={noteContent} setNoteContent={setNoteContent} noteId={noteId}/>

    </div>
  )
}

export default Homepage
