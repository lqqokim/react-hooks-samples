import React from 'react';
import { Link } from 'react-router-dom';
import './../style/Navigation.css';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link className="active" to="/">Home</Link>
            </li>
            <li style={{background: 'gray'}}>
                <Link to="/useState">useState</Link>
            </li>
            <li>
                <Link to="/useInput">useInput</Link>
            </li>
            <li>
                <Link to="/useTabs">useTabs</Link>
            </li>
            <li style={{background: 'gray'}}>
                <Link to="/useEffect">useEffect</Link>
            </li>
            <li>
                <Link to="/useTitle">useTitle</Link>
            </li>
            <li>
                <Link to="/useClick">useClick</Link>
            </li>
            <li>
                <Link to="/useConfirm">useConfirm</Link>
            </li>
            <li>
                <Link to="/usePreventLeave">usePreventLeave</Link>
            </li>
            <li>
                <Link to="/useBeforeLeave">useBeforeLeave</Link>
            </li>
            <li>
                <Link to="/useFadeIn">useFadeIn</Link>
            </li>
            <li>
                <Link to="/useNetwork">useNetwork</Link>
            </li>
            <li>
                <Link to="/useScroll">useScroll</Link>
            </li>
            <li>
                <Link to="/useFullScreen">useFullScreen</Link>
            </li>
            <li>
                <Link to="/useNotification">useNotification</Link>
            </li>
            <li>
                <Link to="/useAxios">useAxios</Link>
            </li>
        </ul>
    )
}

export default Navigation;