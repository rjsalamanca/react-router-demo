import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/about'>About Page</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Page</Link>
                </li>
                <li>
                    <Link to='/topics'>Topics Page</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;