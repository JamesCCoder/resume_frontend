import React from "react";
import "./Detail.scss";

import Header from "Project1/components/Header";
import Footer from "Project1/components/Footer";
import Info from "Project1/components/Info";

const Detail: React.FC = () =>{
    return(
        <div className="detail_overall">
            <Header />
            <Info />
            <Footer />
        </div>
       
    )
}

export default Detail;