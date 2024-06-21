import React, { useState, useEffect } from "react";
import "./Introduction.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Circle from "./Circle";
import resume from "../../static/Resume_Jian Wu.pdf";

const Introduction: React.FC = () => {
    const [showCircle, setShowCircle] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const texts: string[] = ["James Wu", "Full Stack Engineer", "UX/UI developer"];
    const [index, setIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (charIndex <= texts[index].length) {
                const newText = texts[index].substring(0, charIndex);
                setText(newText);
                setCharIndex(prevCharIndex => prevCharIndex + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    if (index === texts.length - 1) {
                        setIndex(0);
                    } else {
                        setIndex(prevIndex => prevIndex + 1);
                    }
                    setCharIndex(0);
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [index, charIndex, texts]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCircle(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="portfolio_introduction">
            <div className="portfolio_introduction_left">
                <div className="portfolio_introduction_left_one">Software Developer</div>
                <div className="portfolio_introduction_left_two">Hello I'm</div>
                <div className="portfolio_introduction_left_three">{text}</div>
                <div className="portfolio_introduction_left_four">I excel at crafting elegant digital experiences and</div>
                <div className="portfolio_introduction_left_five">I am proficient in various programming languages and technologies.</div>
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
                            <FontAwesomeIcon className="portfolio_linkedinicon" icon={faLinkedin} size="2x" />
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
                    <div className={`circle ${showCircle ? 'show' : ''}`}>
                        {/* <img src={""} alt="" className="avatar" /> */}
                        {/* <div className="rotating-border"></div> */}
                        <Circle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
