import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';

const Intro=() =>{
   return(
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hy! I am</span>
            <span><br></br>Janani Gokulakannan</span>
            <span><br></br>To became a successful professional in the
                   field of information technology by utilizing 
                   my skills to achieve goals of a company
                   that focus on customer satisfaction</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
         </div>
        </div>

        <div className="i-right"> I am Right side </div>
    </div>
   )
};

export default Intro
