import React from "react";
import "./P1_home.scss";

import Header from "Project1/components/Header";
import Footer from "Project1/components/Footer";
import List from "Project1/components/List";

const P1_home = () =>{
    return(
        <div className="home_overall">
            <Header />
            <List />
            <Footer />
        </div>
       
    )
}

export default P1_home;