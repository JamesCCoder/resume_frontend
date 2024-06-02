import React from "react";
import "./Header.scss";

import { Link } from 'react-router-dom';

const Header = () =>{
   return(
       <div className="portfolio_header">
           <Link to = "/" className="portfolio_header_left"> 
              <div className="portfolio_header_left_name">James</div>
              <div className="portfolio_header_left_dot"></div>
           </Link>
           <div className="portfolio_header_right">
               <Link to = "/" className="portfolio_header_right_home">Home</Link>
               <button className="portfolio_header_right_projects">Projects</button>
               <Link to = "/resume" className="portfolio_header_right_resume">Resume</Link>
               <button className="portfolio_header_right_contact">Contact</button>
               <button className="portfolio_header_right_hireme">Hire me</button>
            </div>
        </div>
   )
}

export default Header;