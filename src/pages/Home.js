import React from "react";
import "./Home.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import Info from "components/Info";

const Home = () =>{
    return(
        <div className="home_overall">
        <Header />
        <Info />
        <Footer />
        </div>
       
    )
}

export default Home;