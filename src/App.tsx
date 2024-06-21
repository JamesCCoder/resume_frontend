import './App.scss';
import React from "react";
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';
import P1_home from 'Project1/pages/P1_home';
import Detail from 'Project1/pages/Detail';
import Add from "Project1/pages/Add";
import Login from 'Project1/pages/Login';
import Resume from 'MainPage/components/Resume';
import Contact from 'MainPage/components/Contact';
import Register from "Project1/pages/Register";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from "./Home";

const App: React.FC = () => {
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
            <Route path="/" element={<Home />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/project1" element={<P1_home />} />
            <Route path="/project1/login" element={<Login />} />
            <Route path="/project1/register" element={<Register />} />
            <Route path="/project1/:id" element={<Detail />} />
            <Route path="/project1/add" element={<Add />} />
            <Route path="/project1/:id/edit" element={<Add />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const AppWithRouter: React.FC = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default AppWithRouter;
