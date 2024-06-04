import React,{useState, useEffect} from "react";
import "./Introduction.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import resume from "../../static/Resume_jian wu.pdf";

const Introduction = () =>{
    const [showBorder, setShowBorder] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
        setShowBorder(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return(
       <div className="portfolio_introduction">
           <div className="portfolio_introduction_left">
               <div className="portfolio_introduction_left_one">Software Developer</div>
               <div className="portfolio_introduction_left_two">Hello I'm</div>
               <div className="portfolio_introduction_left_three">James Wu</div>
               <div className="portfolio_introduction_left_four">I excel at crafting elegant digital experiences and</div>
               <div className="portfolio_introduction_left_five">I am proficient in various prgramming languages and technologies.</div>
               <div className="portfolio_introduction_left_six">
                   <div className="portfolio_introduction_left_six_resume">
                        <a href={resume} download="My_Resume.pdf" className="portfolio_cv">
                            Download Resume
                        </a>
                    </div>
                   <div className="portfolio_introduction_left_six_two">
                            <a
                                className="linkedin-link"
                                href="https://www.linkedin.com/in/1410042a9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon className="portfolio_linkedinicon" icon={faLinkedin} size="2x" className="linkedin-icon" />
                            </a>
                            <a
                                className="github-link"
                                href="https://github.com/JamesCCoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <FontAwesomeIcon className="portfolio_giticon" icon={faGithub} size="2x" />
                            </a>
                   </div>
               </div>
           </div>
           <div className="portfolio_introduction_right">
                <div>
                    <div className={`circle ${showBorder ? 'show' : ''}`}>
                        {/* <img src={""} alt="" className="avatar" /> */}
                        <div className="rotating-border"></div>
                    </div>
                    
                </div>
           </div>
       </div>
   )
}

export default Introduction;