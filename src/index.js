import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from 'Project1/pages/Home';
import Detail from 'Project1/pages/Detail';
import Add from "Project1/pages/Add";
import Login from 'Project1/pages/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>      
          <Routes>
            {/* the default page is / */}
            <Route exact path="/" element={<App />} />
            <Route path="/project1" element={<Home />} />
            <Route path="/project1/login" element={<Login />} />
            <Route path="/project1/:id" element={<Detail />} />
            <Route path="/project1/add" element={<Add />} />
            <Route path="/project1/:id/edit" element={<Add />} />
        </Routes>
    </Router> 
  </React.StrictMode>
);


