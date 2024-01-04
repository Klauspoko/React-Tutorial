import React, { useRef } from 'react';
import "./styles.css";

interface Props{
    // changed the name of the prop to movie
    movie: string | number;
    setMovie: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// removed the named export and kept only the default export
export default function InputField({movie, setMovie, handleAdd}:Props) {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='new'>
        <form 
            className="input" 
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
            >
            <input 
            ref = {inputRef}
            className='input_box' type="input" 
            value= {movie} 
            onChange={(e) => setMovie(e.target.value)}
            placeholder='Add a Movie...'></input>
            <button className='input_submit' type='submit'>Add</button>
        </form> 
    </div>
    
  
  )
}