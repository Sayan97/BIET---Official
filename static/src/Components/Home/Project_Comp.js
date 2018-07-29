import React,{Component} from 'react';

import './Project_Comp.css';

import prog from './proj.jpg';
import{Glyphicon} from 'react-bootstrap';

//import { url } from 'inspector';
//ongoing projects section on the home page
const ProjectComp =() =>
{
  return(
    <div class="proj_component">
      <div className="proj_image">
        <div className="Side-1">
          <img src={prog} alt="project-image"  className="front-face"/> 
            <div className="Side-2">
              <p className="proj_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <a href="#"> <button class="Proj_Details_button">Know More <span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a> 
            </div>
        </div>
        <div className="proj_name">
            <p>THE PROJECT NAME</p>
        </div>
      </div>
    </div>
  )
}
export default ProjectComp;

