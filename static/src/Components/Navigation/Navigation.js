import React from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import Button from '../Buttons';

//main Navigation Bar
const Navigation=()=> {
    return (
      <div >
      <div className="temp-box">  
      </div>
         <ul id="nav1">
           <div className="leftPart">
           <NavLink className="Nav-link Home" to={`${process.env.PUBLIC_URL}/`} > <Button text={"Home"} className=""/></NavLink>
           <NavLink className="Nav-link About" to={`${process.env.PUBLIC_URL}/About`} > <Button text={"About"} className="nav-font"/></NavLink>
           </div>
           <li className="navlogo" ><img src={mainLogo} alt="Logo"  className="half-circle"/></li>
           <div  className="rightPart">
           <NavLink className="Nav-link Project" to={`${process.env.PUBLIC_URL}/OngoingProject`} > <Button text={"Projects"} className=""/></NavLink>
           <NavLink className="Nav-link JoinNew" to={`${process.env.PUBLIC_URL}/JoinNew`} > <Button text={"Join"} className=""/></NavLink>
            </div>
          </ul>
        </div>
 );
}

export default Navigation;
