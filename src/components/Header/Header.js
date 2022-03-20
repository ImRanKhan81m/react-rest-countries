import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Rest Countries.</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/countries">Countries</a>
                
            </nav>
        </div>
    );
};

export default Header;