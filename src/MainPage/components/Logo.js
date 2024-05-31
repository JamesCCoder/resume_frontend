import React from "react";
import "./Logo.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Logo = ({iconName}) =>{
   return(
       <div className="potfolio_logo_wrapper">
           <FontAwesomeIcon icon={iconName} className="potfolio_logo"/>
       </div>
   )
}

export default Logo;