import React from 'react';
import { Link } from 'react-router-dom';
import './../style/Navigation.css';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link className="active" to="/">Home</Link>
            </li>
            <li>
                <Link to="/useState">useState</Link>
            </li>
            <li>
                <Link to="/useInput">useInput</Link>
            </li>
            <li>
                <Link to="/useTabs">useTabs</Link>
            </li>
            <li>
                <Link to="/useEffect">useEffect</Link>
            </li>
            <li>
                <Link to="/useTitle">useTitle</Link>
            </li>
            <li>
                <Link to="/useClick">useClick</Link>
            </li>
        </ul>
    )
}

export default Navigation;