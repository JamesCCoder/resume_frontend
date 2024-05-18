import React from "react";
import "./Detail.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import Info from "components/Info";

const Detail = () =>{
    return(
        <div className="detail_overall">
        <Header />
        <Info />
        <Footer />
        </div>
       
    )
}

export default Detail;