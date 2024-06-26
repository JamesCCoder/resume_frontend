import './App.scss';
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';
import P1_home from 'Project1/pages/P1_home';
import Detail from 'Project1/pages/Detail';
import Add from "Project1/pages/Add";
import Login from 'Project1/pages/Login';
import Resume from 'MainPage/components/Resume';
import Contact from 'MainPage/components/Contact';
import Register from "Project1/pages/Register";
import IntroVideo from 'MainPage/components/IntroVideo';


import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from "./Home";

import CursorEffect from 'MainPage/components/CursorEffect';

const App: React.FC = () => {
  const location = useLocation();
  const [showHomePage, setShowHomePage] = useState(true);
  const handleVideoEnd = () => {
    setShowHomePage(false);
  };
  return (
    <div className="App">
      {/* <CursorEffect /> */}
      {/* {!showHomePage && <IntroVideo onEnd={handleVideoEnd} />} */}
      {showHomePage && (
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
            <Route path="/project1/students/:id" element={<Detail />} />
            <Route path="/project1/students/add" element={<Add />} />
            <Route path="/project1/students/:id/edit" element={<Add />} />
            <Route path="/project1/professors/:id" element={<Detail />} />
            <Route path="/project1/professors/add" element={<Add />} />
            <Route path="/project1/professors/:id/edit" element={<Add />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      )}
    </div>
  );
};

export default App;
