import React from "react";
import "./Header.scss";

const Header = () =>{
   return(
       <div className="portfolio_header">
           <div className="portfolio_header_left"> 
              <div className="portfolio_header_left_name">James</div>
              <div className="portfolio_header_left_dot"></div>
           </div>
           <div className="portfolio_header_right">
               <button className="portfolio_header_right_home">Home</button>
               <button className="portfolio_header_right_projects">Projects</button>
               <button className="portfolio_header_right_resume">Resume</button>
               <button className="portfolio_header_right_contact">Contact</button>
               <button className="portfolio_header_right_hireme">Hire me</button>
            </div>
        </div>
   )
}

export default Header;