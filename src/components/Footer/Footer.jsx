import React from 'react'
import './styles.css'

export const Footer = () => {
  return (
    <div className='footer'>
        
        <header>
            <svg width="41" height="40" viewBox="0 0 41 40" fill="#000" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" fill="#000" clip-rule="evenodd" d="M20.6836 40C31.7293 40 40.6836 31.0457 40.6836 20C40.6836 8.95431 31.7293 0 20.6836 0C9.63788 0 0.683594 8.95431 0.683594 20C0.683594 31.0457 9.63788 40 20.6836 40ZM26.9229 9.31684C27.2266 8.23805 26.1797 7.60013 25.2236 8.2813L11.8767 17.7896C10.8398 18.5283 11.0029 20 12.1217 20H15.6363V19.9728H22.4861L16.9048 21.9421L14.4443 30.6832C14.1406 31.762 15.1874 32.3999 16.1436 31.7187L29.4905 22.2105C30.5274 21.4718 30.3642 20 29.2455 20H23.9157L26.9229 9.31684Z" />
            </svg>
            <h2>Findtrend</h2>
        </header>

        <section className="footer-nav">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Contact Us</a>
            <a href="#">Careers</a>
        </section>

    </div>
  )
}
