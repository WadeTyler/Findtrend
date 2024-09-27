import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import { MobileContext } from '../../../App';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

export const Navbar = () => {

    const isMobile = useContext(MobileContext);
    
  return (
    isMobile ? <MobileView /> : <DesktopView />
  )
}


const DesktopView = () => {
    return (
        <div className='nav-container'>
            <div className="navbar">
                
                {/* Header */}
                <header>
                    <img src='/images/logo.svg' alt="Logo" />
                    <h2>Findtrend</h2>
                </header>

                {/* Nav */}
                <nav>
                    <a href="#">About</a>
                    <a href="#">How it Works</a>
                    <a href="#">Pricing</a>
                    <a href="#">Solution</a>
                    <a href="#">Features</a>
                </nav>

                {/* Buttons */}
                <div className="buttons">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
                </div>
            </div>
        </div>
    );
}

const MobileView = () => {

    const [droppedDown, setDroppedDown] = useState(false);

    return (
        <div className='mobile-nav-container'>
                
                {/* Header */}
                <header>
                    <img src='/images/logo.svg' alt="Logo" />
                    {droppedDown ? 
                        <IoIosClose style={{color: 'gray', fontSize: "1.5rem"}} onClick={() => {setDroppedDown(!droppedDown)}}/> 
                        : 
                        <GiHamburgerMenu style={{color: 'gray'}} onClick={() => {setDroppedDown(!droppedDown)}}/>
                    }
                    
                </header>

                {droppedDown &&
                    <nav>
                        <a href="#">About</a>
                        <a href="#">How it Works</a>
                        <a href="#">Pricing</a>
                        <a href="#">Solution</a>
                        <a href="#">Features</a>
                        <a href="#">Login</a>

                        <button>Register</button>
                    </nav>
                }
        </div>
    );
}