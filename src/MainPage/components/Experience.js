import React from "react";
import "./Experience.scss";
import Smallblock from "./Smallblock";

const Experience = () =>{
    return(
        <>
            <Smallblock year={"2022-2024"} title={"Software Engineer III"} words={"JP Morgan Chase"}/>
            <Smallblock year={"2021-2022"} title={"Full stack Engineer"} words={"Baanyan s-services"} />
            <Smallblock year={"2014-2017"} title={"Frontend developer"} words={"IC bank of China"} />
        </>
    )
}

export default Experience;