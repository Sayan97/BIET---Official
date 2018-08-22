//third section of innovators
import React from 'react';
import './c-member.css';
import temp_image from './img1.jpg';

const Ccomp=({name,image})=>
{

  return(
    <div className="c-member shadow-3">
        <img src={temp_image} alt="Member-photograph" className="member-photo"/>
        <div className="part">
            <span className="content-1">{name} </span>
        </div>
   </div>
  )}

export default Ccomp;
