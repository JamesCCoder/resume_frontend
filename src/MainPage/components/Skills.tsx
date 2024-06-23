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
             <Logo iconName={faHtml5 as IconProp} iconTitle="HTML5" iconTooltip="HTML5" />
            <Logo iconName={faCss3 as IconProp} iconTitle="CSS3" iconTooltip="CSS3" />
            <Logo iconName={faJs as IconProp} iconTitle="JavaScript" iconTooltip="JavaScript" />
            <Logo iconName={faReact as IconProp} iconTitle="React" iconTooltip="React" />
            <Logo iconName={faJava as IconProp} iconTitle="Java" iconTooltip="Java" />
            <Logo iconName={faDocker as IconProp} iconTitle="Docker" iconTooltip="Docker" />
            <Logo iconName={faJenkins as IconProp} iconTitle="Jenkins" iconTooltip="Jenkins" />
            <Logo iconName={faAws as IconProp} iconTitle="AWS" iconTooltip="AWS" />
            <Logo iconName={faFontAwesome as IconProp} iconTitle="Font Awesome" iconTooltip="Font Awesome" />
            <Logo iconName={faBootstrap as IconProp} iconTitle="Bootstrap" iconTooltip="Bootstrap" />
            <Logo iconName={faGithub as IconProp} iconTitle="GitHub" iconTooltip="GitHub" />
            <Logo iconName={faFigma as IconProp} iconTitle="Figma" iconTooltip="Figma" />
            <Logo iconName={faMedapps as IconProp} iconTitle="MedApps" iconTooltip="MedApps" />
        </>
    );
}

export default Skills;
