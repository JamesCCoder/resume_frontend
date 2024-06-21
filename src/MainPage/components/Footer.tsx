import React, { useState, useEffect } from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
    const [year, setYear] = useState<number>(0);
    const [project, setProject] = useState<number>(0);
    const [technology, setTechnology] = useState<number>(0);
    const [code, setCode] = useState<number>(0);

    useEffect(() => {
        let currentNumberOne = 1;
        let currentNumberTwo = 1;
        let currentNumberThree = 1;
        let currentNumberFour = 1;
        const targetNumberOne = 5;
        const targetNumberTwo = 7;
        const targetNumberThree = 8;
        const targetNumberFour = 500;
        const duration = 2000; 
        const intervalOne = duration / (targetNumberOne - currentNumberOne);
        const intervalTwo = duration / (targetNumberTwo - currentNumberTwo);
        const intervalThree = duration / (targetNumberThree - currentNumberThree);
        const intervalFour = duration / (targetNumberFour - currentNumberFour);

        const intervalIdOne = setInterval(() => {
            if (currentNumberOne < targetNumberOne) {
                currentNumberOne++;
                setYear(currentNumberOne);
            } else {
                clearInterval(intervalIdOne);
            }
        }, intervalOne);

        const intervalIdTwo = setInterval(() => {
            if (currentNumberTwo < targetNumberTwo) {
                currentNumberTwo++;
                setProject(currentNumberTwo);
            } else {
                clearInterval(intervalIdTwo);
            }
        }, intervalTwo);

        const intervalIdThree = setInterval(() => {
            if (currentNumberThree < targetNumberThree) {
                currentNumberThree++;
                setTechnology(currentNumberThree);
            } else {
                clearInterval(intervalIdThree);
            }
        }, intervalThree);

        const intervalIdFour = setInterval(() => {
            if (currentNumberFour < targetNumberFour) {
                currentNumberFour++;
                setCode(currentNumberFour);
            } else {
                clearInterval(intervalIdFour);
            }
        }, intervalFour);

        return () => {
            clearInterval(intervalIdOne);
            clearInterval(intervalIdTwo);
            clearInterval(intervalIdThree);
            clearInterval(intervalIdFour);
        };
    }, []);

    return (
        <div className="portfolio_footer">
            <div className="portfolio_footer_first">
                <div className="portfolio_footer_first_one">{year}</div>
                <div className="portfolio_footer_first_two">Years of Experience</div>
            </div>
            <div className="portfolio_footer_second">
                <div className="portfolio_footer_second_one">{project}</div>
                <div className="portfolio_footer_second_two">Projects completed</div>
            </div>
            <div className="portfolio_footer_third">
                <div className="portfolio_footer_third_one">{technology}</div>
                <div className="portfolio_footer_third_two">Technologies mastered</div>
            </div>
            <div className="portfolio_footer_fourth">
                <div className="portfolio_footer_fourth_one">{code}</div>
                <div className="portfolio_footer_fourth_two">Code commits</div>
            </div>
        </div>
    );
}

export default Footer;
