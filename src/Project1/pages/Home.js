import React from "react";
import "./Home.scss";

import Header from "Project1/components/Header";
import Footer from "Project1/components/Footer";
import List from "Project1/components/List";

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