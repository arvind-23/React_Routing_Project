import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import './routing.css'


export default function Example() {
    return(
        <>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                         <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        
                    </ul>
                </div>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Blog" element={<Blog/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>

            </BrowserRouter>
        </>
    )
}