import React from "react";
import "./Skills.scss";
import { 
    faFigma, faHtml5, faCss3, faJs, faReact, faJava, 
    faDocker, faAws, faJenkins, faFontAwesome, faBootstrap, 
    faGithub, faMedapps 
} from '@fortawesome/free-brands-svg-icons';

import Logo from "./Logo";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Skills: React.FC = () => {
    return (
        <>
            <Logo iconName={faHtml5 as IconProp} iconTooltip={"HTML5"} />
            <Logo iconName={faCss3 as IconProp} iconTooltip={"CSS3"} />
            <Logo iconName={faJs as IconProp} iconTooltip={"Javascript"} />
            <Logo iconName={faReact as IconProp} iconTooltip={"React"} />
            <Logo iconName={faJava as IconProp} iconTooltip={"Java"} />
            <Logo iconName={faDocker as IconProp} iconTooltip={"Docker"} />
            <Logo iconName={faJenkins as IconProp} iconTooltip={"Jenkins"} />
            <Logo iconName={faAws as IconProp} iconTooltip={"AWS"} />
            <Logo iconName={faFontAwesome as IconProp} iconTooltip={"Fontawesome"} />
            <Logo iconName={faBootstrap as IconProp} iconTooltip={"Bootstrap"} />
            <Logo iconName={faGithub as IconProp} iconTooltip={"Github"} />
            <Logo iconName={faFigma as IconProp} iconTooltip={"Figma"} />
            <Logo iconName={faMedapps as IconProp} />
        </>
    );
}

export default Skills;
