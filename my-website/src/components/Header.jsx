import React from 'react'

function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="logo">My App</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header