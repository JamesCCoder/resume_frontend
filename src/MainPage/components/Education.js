import React from "react";
import "./Education.scss";
import Smallblock from "./Smallblock";

const Education = () =>{
    return (
        <>
            <Smallblock year={"2007-2011"}  title={"Mathematics"} words={"Northwest Uni"}/>
            <Smallblock year={"2018-2020"} title={"MBA"} words={"Missouri state Uni"}/>
        </>
    )
}

export default Education;