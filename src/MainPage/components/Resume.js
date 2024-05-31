import React from "react";
import Logo from "./Logo";
import "./Resume.scss";
import Smallblock from "./Smallblock";

import { faHtml5,faCss3,faJs,faReact,faJava, faDocker, faAws, faJenkins } from '@fortawesome/free-brands-svg-icons';

const Resume = () =>{
   return(
       <div className="portfolio_resume">
           <div className="portfolio_resume_left">
               <div className="portfolio_resume_left_one">Why hire me ?</div>
               <div className="portfolio_resume_left_two">Your worst sin is that</div>
               <div className="portfolio_resume_left_three">you have betrayed yourself for nothing.</div>
               <div className="portfolio_resume_left_four">
                   <button>Experience</button>
                   <button>Education</button>
                   <button>Skills</button>
                   <button>About me</button>
               </div>
           </div>
           <div className="portfolio_resume_right">
               <div className="portfolio_resume_right_title">My experience</div>
               <div className="portfolio_resume_right_content">
                    {/* <Smallblock />
                    <Smallblock />
                    <Smallblock />
                    <Smallblock />
                    <Smallblock />
                    <Smallblock />
                    <Smallblock />
                    <Smallblock /> */}
                    <Logo iconName={faHtml5}/>
                    <Logo iconName={faCss3}/>
                    <Logo iconName={faJs}/>
                    <Logo iconName={faReact}/>
                    <Logo iconName={faJava}/>
                    <Logo iconName={faDocker}/>
                    <Logo iconName={faJenkins}/>
                    <Logo iconName={faAws}/>
               </div>
             
           </div>
       </div>
   )
}

export default Resume;