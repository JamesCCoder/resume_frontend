import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from 'react-router-dom';

import { buttonClickAnalytics } from '../../utils/analytics';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1045 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [menuOpen]);

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
        <div className="portfolio_header">
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <Link to="/" 
                    className="portfolio_header_left"
                    data-id="0"
                    data-name="logoButton"
                    onClick={buttonClick}>
                <div className="portfolio_header_left_name">James</div>
                <div className="portfolio_header_left_dot"></div>
            </Link>
            <div className="portfolio_header_right">
                <Link to="/" 
                    className="portfolio_header_right_home" 
                    data-id="1"
                    data-name="pc_homeButton"
                    onClick={buttonClick}>Home</Link>
                <Link to="/project1/login" 
                    className="portfolio_header_right_projects"
                    data-id="2"
                    data-name="pc_projectsButton"
                    onClick={buttonClick}>Projects</Link>
                <Link to="/resume" 
                    className="portfolio_header_right_resume"
                    data-id="3"
                    data-name="pc_resumeButton"
                    onClick={buttonClick}>Resume</Link>
                <Link to="/contact" 
                    className="portfolio_header_right_contact"
                    data-id="4"
                    data-name="pc_contactButton"
                    onClick={buttonClick}>Contact</Link>
                <Link to="/contact" 
                    className="portfolio_header_right_hireme"
                    data-id="5"
                    data-name="pc_hiremeButton"
                    onClick={buttonClick}>Hire me</Link>
            </div>
            <div className="portfolio_header_right_hamburger" onClick={toggleMenu}>
                <div className="hamburger_one"></div>
                <div className="hamburger_two"></div>
                <div className="hamburger_three"></div>
            </div>
            {menuOpen && (
                <div className="menu">
                    <Link to="/" className="menu_one"
                    data-id="6"
                    data-name="cellphone_homeButton"
                    onClick={buttonClick}>Home</Link>
                    <Link to="/project1/login" className="menu_two"
                    data-id="7"
                    data-name="cellphone_projectsButton"
                    onClick={buttonClick}>Project</Link>
                    <Link to="/resume" className="menu_three"
                    data-id="8"
                    data-name="cellphone_resumeButton"
                    onClick={buttonClick}>Resume</Link>
                    <Link to="/contact" className="menu_four"
                    data-id="9"
                    data-name="cellphone_contactButton"
                    onClick={buttonClick}>Contact</Link>
                    <button className="menu_button" onClick={toggleMenu}>
                        <div className="menu_button_one"></div>
                        <div className="menu_button_two"></div>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;
