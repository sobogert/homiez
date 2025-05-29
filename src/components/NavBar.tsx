import React from 'react';
import homieStatusIcon from '../assets/friends.svg';
import updateStatusIcon from '../assets/updateStatus.svg';
import profileIcon from '../assets/profile.svg';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/NavBar.css';
import ViewStatuses from "./ViewStatuses";

function NavBar() {

    return (
        <div id={"nav-bar"} className={"active_nav"}>
            <img alt={"view homie'z status"} src={homieStatusIcon}/>
            <img alt={"view update status"} src={updateStatusIcon}/>
            <img alt={"view profile"} src={profileIcon}/>
            {/*<Router>*/}
            {/*    <nav>*/}
            {/*        <ul style={{ display: "flex", gap: "20px" }}>*/}
            {/*            <li>*/}
            {/*                <Link to="/">VS</Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<ViewStatuses />} />*/}
            {/*    </Routes>*/}
            {/*</Router>*/}
        </div>
);
}

export default NavBar;
