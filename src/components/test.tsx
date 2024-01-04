import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import InputField from './components/InputField'; // not used, so removed
// import { Todo } from './components/model'; // not defined, so removed

const App: React.FC = () => {
    // changed the names of the state variables and setters to avoid confusion
    const [movie, setMovie] = useState<string | number>("");
    const [movies, setMovies] = useState<Array<{ id: number; addmovie: string | number; isDone: boolean }>>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (movie) {
            // added the new movie to the movies array and updated the state
            setMovies([...movies, { id: Date.now(), addmovie: movie, isDone: false }]);
            // reset the movie state to an empty string
            setMovie("");
        }
    };

    console.log(movies);
