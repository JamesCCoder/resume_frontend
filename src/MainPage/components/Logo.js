import React from "react";
import "./Logo.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Logo = ({iconName, iconTitle = "more",iconTooltip = "more"}) =>{
   return(
       <div className="potfolio_logo_wrapper">
           <FontAwesomeIcon icon={iconName} className="potfolio_logo" title={iconTitle}/>
           <div className="potfolio_logo_tooltip">{iconTooltip}</div>
       </div>
   )
}

export default Logo;