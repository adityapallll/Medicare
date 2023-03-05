import React from 'react'
import MediCare from '../images/MediCare+.png'
import "../Styles/App.css"

const Navbar = () => {
    return (
        <nav className='navigation'>
            <div className='img-box'>
                <img src={MediCare}
                    alt='loading...' />
            </div>
            <div className='links'>
                <ol>
                    <li>Home</li> <li>About</li> <li>Services</li> <li>News</li> <li className='Contact'>Contact</li>
                </ol>
            </div>
        </nav>
    )
}

export default Navbar