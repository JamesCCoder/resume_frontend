import React from "react";
import "./Home.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";

const Home = () =>{
    return(
        <div className="home_overall">
        <Header />
         <List />
        <Footer />
        </div>
       
    )
}

export default Home;