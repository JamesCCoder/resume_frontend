import React,{useState} from "react";
import "./Resume.scss";


import Header from "./Header";

import Experience from "./Experience";
import Education from "./Education";
import Aboutme from "./Aboutme";
import Skills from "./Skills";

const Resume = () =>{

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 1:
        return <Experience />;
      case 2:
        return <Education />;
      case 3:
        return <Skills />;
      case 4:
        return <Aboutme />;
      default:
        return <Experience />;
    }
  };
   return(
    <div className="potfolio_resume_wrap">
      <Header />
       <div className="portfolio_resume">
           <div className="portfolio_resume_left">
               <div className="portfolio_resume_left_one">Why hire me ?</div>
               <div className="portfolio_resume_left_two">Your worst sin is that</div>
               <div className="portfolio_resume_left_three">you have betrayed yourself for nothing.</div>
               <div className="portfolio_resume_left_four">
                   <button onClick={() => handleButtonClick(1)}>Experience</button>
                   <button onClick={() => handleButtonClick(2)}>Education</button>
                   <button onClick={() => handleButtonClick(3)}>Skills</button>
                   <button onClick={() => handleButtonClick(4)}>About me</button>
               </div>
           </div>
           <div className="portfolio_resume_right">
               <div className="portfolio_resume_right_title">
                   {selectedButton === 1 && "My experience"}
                   {selectedButton === 2 && "My education"}
                   {selectedButton === 3 && "My skills"}
                   {selectedButton === 4 && "About me"}
               </div>
               <div className="portfolio_resume_right_content">
                    {renderContent()}
               </div>
             
           </div>
       </div>
       </div>
      
   )
}

export default Resume;