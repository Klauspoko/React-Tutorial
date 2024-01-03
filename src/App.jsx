import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
                    <span className="name">SpclassNameerMan</span>
                    <span className="delete">delete</span>
                </li>
            </ul>
        </div>
        <form className="add-book">
            <input type="text" placeholder="Add a movie..."/>
            <button>Add</button>
        </form>
    </div>
    </>
  )
}

export default App
