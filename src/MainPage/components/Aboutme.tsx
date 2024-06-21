import React from "react";
import "./Aboutme.scss";

const Aboutme: React.FC = () => {
    return (
        <div className="potofolio_aboutme">
            <div className="potofolio_aboutme_one">
                <div className="potofolio_aboutme_one_one">Name</div>
                <div className="potofolio_aboutme_one_two">James Wu</div>
            </div>
            <div className="potofolio_aboutme_one">
                <div className="potofolio_aboutme_one_one">Experience</div>
                <div className="potofolio_aboutme_one_two">5+ years</div>
            </div>
            <div className="potofolio_aboutme_one">
                <div className="potofolio_aboutme_one_one">Email</div>
                <div className="potofolio_aboutme_one_two">justinwpro@gmail.com</div>
            </div>               
            <div className="potofolio_aboutme_one">
                <div className="potofolio_aboutme_one_one">Language</div>
                <div className="potofolio_aboutme_one_two">English, Chinese</div>
            </div>
        </div>
    );
}

export default Aboutme;
