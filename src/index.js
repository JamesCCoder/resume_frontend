import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Add from "pages/Add";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>      
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project1" element={<Home />} />
            <Route path="/project1/:id" element={<Detail />} />
            <Route path="/project1/add" element={<Add />} />
            <Route path="/project1/:id/edit" element={<Add />} />
        </Routes>
    </Router> 
  </React.StrictMode>
);


