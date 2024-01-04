import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import InputField from './components/InputField';
import { Todo } from './components/model';
import Todolist from './components/Todolist';

const App: React.FC = () => {
    // changed the names of the state variables and setters to match the movie list
    const [movie, setMovie] = useState<string>("");
    const [movies, setMovies] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (movie) {
            setMovies([...movies, { id: Date.now(), Todo: movie, isDone: false }])
            setMovie("");
        }
    };

    console.log(movies);

  return (
    <>
    <div className="wrapper">
        <header>
            <div className="page-banner">
                <h1 className="title">Hollywood Movies List</h1>
                <p className='subhead'>All time best American Movies</p>
                <form className="search-movies">
                    <input type="text" placeholder="Search Movies..."/>
                </form>
            </div>
        </header>
        <div className="book-list">
            <h2 className="title">Movies</h2>
            <ul>
                <li>
                    <span className="name">Fast and Furious</span>
                    <span className="delete">delete</span>    
                </li>
                <li>
                    <span className="name">Escape Plan</span>
                    <span className="delete">delete</span>
                </li>
                <li>
                    <span className="name">Loki</span>
                    <span className="delete">delete</span>    
                </li>
                <li>
                    <span className="name">Amazing SpiderMan</span>
                    <span className="delete">delete</span>
                </li>
                {movies.map((t) => (
                    <li>
                        {t.Todo}
                        <span className='delete'>delete</span>
                    </li>
                        
                ))}
            </ul>
            <InputField movie={movie} setMovie={setMovie} handleAdd={handleAdd} />
            <Todolist movies={movies} setMovies={setMovies}/>
        </div>
        
    </div>
    </>
  )
}

export default App
