import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from 'react-router-dom';

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

    return (
        <div className="portfolio_header">
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <Link to="/" className="portfolio_header_left">
                <div className="portfolio_header_left_name">James</div>
                <div className="portfolio_header_left_dot"></div>
            </Link>
            <div className="portfolio_header_right">
                <Link to="/" className="portfolio_header_right_home">Home</Link>
                <Link to="/project1/login" className="portfolio_header_right_projects">Projects</Link>
                <Link to="/resume" className="portfolio_header_right_resume">Resume</Link>
                <Link to="/contact" className="portfolio_header_right_contact">Contact</Link>
                <Link to="/contact" className="portfolio_header_right_hireme">Hire me</Link>
            </div>
            <div className="portfolio_header_right_hamburger" onClick={toggleMenu}>
                <div className="hamburger_one"></div>
                <div className="hamburger_two"></div>
                <div className="hamburger_three"></div>
            </div>
            {menuOpen && (
                <div className="menu">
                    <Link to="/" className="menu_one">Home</Link>
                    <Link to="/project1/login" className="menu_two">Project</Link>
                    <Link to="/resume" className="menu_three">Resume</Link>
                    <Link to="/contact" className="menu_four">Contact</Link>
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
