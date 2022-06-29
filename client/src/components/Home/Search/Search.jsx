import React, {useState} from 'react'
import "./Search.css"
import {useNavigate} from "react-router-dom"; 

function Search() { 
  const navigate = useNavigate();  
  const [text, setText] = useState(""); 

  const onSubmit = () => {
    navigate(`/search/${text}`); 
    window.location.reload(); 
  }

  return (
    <>
      <div className='search' >
        <input type="text" placeholder='type something to search' onChange={(e) => setText(e.target.value)} /> 
        <button onClick={() => onSubmit()} >search </button>
      </div>
    </>
  )
}

export default Search