import React,{useState} from "react";
import "./Input.scss";

import axios from 'axios';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Input = () =>{
    const [formData, setFormData] = useState({
        name: '',
        sex: '',
        email: ''
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const submitClick = async(e) =>{
       e.preventDefault();
    try {
      await axios.post('http://localhost:8080/students', formData);
      setFormData({
        name: '',
        sex: '',
        email: ''
      });
    } catch (error) {
      setError('Error adding student');
      console.error('Error adding student:', error);
    }
    }

    const cancelClick = (e) =>{
        setFormData({
        name: '',
        sex: '',
        email: ''
      });
    }
   return (
       <div className="input_overall">
           <form className="input_form" autoComplete="off" onSubmit={submitClick}>
                <div>
                    <label htmlFor="id" className="input_label">name: </label>
                    <input value={formData.name} onChange={handleChange} type="text" id="id" name="id" className="input_inputbox" autoComplete="off"></input>
                </div>
                
                <div className="input_radio">
                    <input type="radio" id="option1" name="option" value="option1" className="radio_input"/>
                    <label htmlFor="option1" className="radio_label">male</label>
                    <input type="radio" id="option2" name="option" value="option2" className="radio_input"/>
                    <label htmlFor="option2" className="radio_label">female</label>
                </div>
                
                <div>
                    <label htmlFor="email" className="input_label">email: </label>
                    <input value={formData.name} onChange={handleChange} type="text" id="email" name="email" className="input_inputbox" autoComplete="off"></input>
                </div>
                <div className="input_buttons">
                    <Link to = "/project1"  className="input_submit" onClick={e => submitClick(e)}>
                       add
                    </Link>
                    <Link to = "/project1" className="input_cancel" onClick={e => cancelClick(e)}>
                       cancel
                    </Link>
                </div>
               
           </form>
           
           
       </div>
   )
}

export default Input;