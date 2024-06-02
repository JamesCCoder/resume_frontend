import React from "react";
import "./Skills.scss";

import { faHtml5,faCss3,faJs,faReact,faJava, faDocker, faAws, faJenkins, faFontAwesome, faBootstrap, faGithub, faMedapps } from '@fortawesome/free-brands-svg-icons';

import Logo from "./Logo";

const Skills = () =>{
    return (
        <>
            <Logo iconName={faHtml5} iconTooltip={"HTML5"}/>
            <Logo iconName={faCss3} iconTooltip={"CSS3"}/>
            <Logo iconName={faJs} iconTooltip={"Javascript"}/>
            <Logo iconName={faReact} iconTooltip={"React"}/>
            <Logo iconName={faJava} iconTooltip={"Java"}/>
            <Logo iconName={faDocker} iconTooltip={"Docker"}/>
            <Logo iconName={faJenkins} iconTooltip={"Jenkins"}/>
            <Logo iconName={faAws} iconTooltip={"AWS"}/>
            <Logo iconName={faFontAwesome} iconTooltip={"Fontawesome"}/>
            <Logo iconName={faBootstrap} iconTooltip={"Bootstrap"}/>
            <Logo iconName={faGithub} iconTooltip={"Github"}/>
            <Logo iconName={faMedapps}/>
        </>
    )
}

export default Skills;