import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"

// * Components
import { Collapse } from '@chakra-ui/core'
import withSizes from 'react-sizes'


// * Styles 
import './header.sass'

const Header = ({ isMobile, lightNav, setNav }) => {
    const [show, setShow] = React.useState(false)

    const [mobile, toggle] = useState(false)
    useEffect(() => {
        if (!isMobile) {
            toggle(false)
            setShow(false)
        }
    })
    return (
        <div className='center'>
            <header className={!lightNav ? "header light-bg" : "header transparent-bg"}>
                <nav className="wrapper">
                    <Link to='/'><h1>Home Page and Blog</h1></Link>
                    <ul className='nav-links-wide'>
                        <Link to='#'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/posts'>Posts</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>

                    <button className="nav-burger" onClick={() => setShow(!show)}>MENU</button>
                </nav>

                {isMobile && <Collapse isOpen={show} duration='500'>
                    <ul className='nav-links-col'>
                        <Link to='#'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/posts'>Posts</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                </Collapse>}
            </header>

        </div>
    )
}

const mapSizesToProps = ({ width }) => ({ isMobile: width < 850 })

export default withSizes(mapSizesToProps)(Header)