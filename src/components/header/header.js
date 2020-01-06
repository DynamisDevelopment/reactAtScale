import React from 'react'
import { Link } from "gatsby"

// * Styles 
import './header.sass'

const Header = () => {
    return (
        <div className='center'>
            <div className="header">
                <h1>Home Page and Blog</h1>
                <ul className='nav-links'>
                    <Link to='#'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header