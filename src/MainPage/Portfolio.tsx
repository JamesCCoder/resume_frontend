import React from "react";
import Header from "MainPage/components/Header";
import Footer from 'MainPage/components/Footer';
import Introduction from "MainPage/components/Introduction";
import "./Portfolio.scss";

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <Header />
            <Introduction />
            <Footer />
        </div>
    );
}

export default Portfolio;
