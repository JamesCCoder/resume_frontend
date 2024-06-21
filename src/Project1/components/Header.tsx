import React from "react";
import "./Header.scss";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header_overall">
      <div className="header_title">Student management system</div>
      <Link to="/" className="header_button">Back to home</Link>
    </div>
  );
}

export default Header;
