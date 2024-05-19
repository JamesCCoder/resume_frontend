import React from "react";
import "./Input.scss";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Input = () =>{
    const submitClick = (e) =>{
       
    }

    const cancelClick = (e) =>{
        
    }
   return (
       <div className="input_overall">
           <form className="input_form" autocomplete="off">
                <div>
                    <label for="username" className="input_label">id: </label>
                    <input type="text" id="username" name="username" className="input_inputbox" autocomplete="off"></input>
                </div>
                
                <div>
                    <label for="id" className="input_label">name: </label>
                    <input type="text" id="id" name="id" className="input_inputbox" autocomplete="off"></input>
                </div>
                
                <div class="input_radio">
                    <input type="radio" id="option1" name="option" value="option1" className="radio_input"/>
                    <label for="option1" className="radio_label">male</label>
                    <input type="radio" id="option2" name="option" value="option2" className="radio_input"/>
                    <label for="option2" className="radio_label">female</label>
                </div>
                
                <div>
                    <label for="email" className="input_label">email: </label>
                    <input type="text" id="email" name="email" className="input_inputbox" autocomplete="off"></input>
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