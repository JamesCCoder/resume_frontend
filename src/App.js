import './App.scss';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router';
import P1_home from 'Project1/pages/P1_home';
import Detail from 'Project1/pages/Detail';
import Add from "Project1/pages/Add";
import Login from 'Project1/pages/Login';
import Portfolio from 'MainPage/Portfolio';
import Resume from 'MainPage/components/Resume';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from "./Home";


const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames="fade"
        >
          <Routes location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/project1" element={<P1_home />} />
            <Route path="/project1/login" element={<Login />} />
            <Route path="/project1/:id" element={<Detail />} />
            <Route path="/project1/add" element={<Add />} />
            <Route path="/project1/:id/edit" element={<Add />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
