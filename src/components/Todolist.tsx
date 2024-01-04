import React from 'react'
import "./styles.css";
import { Todo } from './model';

interface Props{
    movies: Todo[];
    setMovies: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist: React.FC<Props> = ({movies,setMovies}:Props) => {
  return (
    <div className='todos'>

    </div>
  )
}

export default Todolist