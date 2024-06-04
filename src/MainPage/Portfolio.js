import Header from "MainPage//components/Header";
import Footer from 'MainPage/components/Footer';
import Introduction from "MainPage//components/Introduction";
import React from "react";
import "./Portfolio.scss";


const Portfolio = () =>{
   return(
       <div className="portfolio">
           <Header />
           <Introduction />
           <Footer />
       </div>
   )
}

export default Portfolio;