import React, { useState } from "react";
import "./Resume.scss";

import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import Aboutme from "./Aboutme";
import Skills from "./Skills";

import { buttonClickAnalytics } from '../../utils/analytics';

const Resume: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<number>(1);

    const handleButtonClick = (buttonNumber: number) => {
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

       const buttonClick = async (e: any) => {
        const buttonId = e.currentTarget.getAttribute('data-id');
        const buttonName = e.currentTarget.getAttribute('data-name');

        if (buttonId && buttonName) {
            await buttonClickAnalytics(buttonId, buttonName);
        }

        if (e.currentTarget && e.currentTarget.onclick) {
            e.currentTarget.onclick(e);
        }
    };

    return (
        <div className="potfolio_resume_wrap">
            <Header />
            <div className="portfolio_resume">
                <div className="portfolio_resume_left">
                    <div className="portfolio_resume_left_one">Why hire me ?</div>
                    <div className="portfolio_resume_left_two">Your worst sin is that</div>
                    <div className="portfolio_resume_left_three">you have betrayed yourself for nothing.</div>
                    <div className="portfolio_resume_left_four">
                        <button 
                            data-id="13"
                            data-name="experience"
                            onClick={(e) => {handleButtonClick(1); buttonClick(e)}}>Experience</button>
                        <button
                            data-id="14"
                            data-name="education"
                            onClick={(e) => {handleButtonClick(2); buttonClick(e)}}>Education</button>
                        <button
                            data-id="15"
                            data-name="skills"
                            onClick={(e) => {handleButtonClick(3); buttonClick(e)}}>Skills</button>
                        <button
                            data-id="16"
                            data-name="aboutme"
                            onClick={(e) => {handleButtonClick(4); buttonClick(e)}}>About me</button>
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
    );
};

export default Resume;
