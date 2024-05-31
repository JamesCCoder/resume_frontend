import React from "react";
import "./Smallblock.scss";

const Smallblock = ({year, title, words}) =>{
    return(
        <div className="portfolio_smallblock">
            <div className="portfolio_smallblock_year">{year}</div>
            <div className="portfolio_smallblock_title">{title}</div>
            <div className="portfolio_smallblock_place">
                <div className="portfolio_smallblock_place_dot"></div>
                <div className="portfolio_smallblock_place_words">{words}</div>
            </div>
        </div>
    )
}

export default Smallblock;