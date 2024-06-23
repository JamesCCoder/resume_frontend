import React from "react";
import "./Logo.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface LogoProps {
    iconName: IconProp;
    iconTitle?: string;
    iconTooltip?: string;
}

const Logo: React.FC<LogoProps> = ({ iconName, iconTitle = "default title", iconTooltip = "default tooltip" }) => {
    return (
        <div className="potfolio_logo_wrapper">
            <FontAwesomeIcon icon={iconName} className="potfolio_logo" title={iconTitle} aria-label={iconTooltip}/>
            <div className="potfolio_logo_tooltip">{iconTooltip}</div>
        </div>
    );
}

export default Logo;
