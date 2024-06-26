import React from "react";
import "./P1_home.scss";

import Header from "Project1/components/Header";
import Footer from "Project1/components/Footer";
import StudentsList from "Project1/components/StudentsList";
import ProfessorsList from "Project1/components/ProfessorsList";

const P1_home: React.FC = () =>{
    return(
        <div className="home_overall">
            <Header />
            <StudentsList />
            <ProfessorsList />
            <Footer />
        </div>
       
    )
}

export default P1_home;