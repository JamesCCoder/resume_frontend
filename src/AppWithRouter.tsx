import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const AppWithRouter: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
