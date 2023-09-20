import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/games">My games</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;