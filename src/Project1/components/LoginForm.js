import React,{useState} from "react";
import "./LoginForm.scss";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Both username and password could not be empty');
            return;
        }

       try {
            // const response = await axios.post('http://localhost:8080/api/login', { username, password });
            const response = await axios.post('https://james-resume-backend-9a3094b7738e.herokuapp.com/api/login', { username, password });
            if (response.data) {
                navigate('/project1/');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };
   return (
       <div className="loginform_wrapper">
           <form className="loginform_form" onSubmit={handleSubmit}>
                <div className="input_label">
                    <label htmlFor="username">Username: </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" className="input_inputbox" autoComplete="off"></input>
                </div>
                <div className="input_label">
                    <label htmlFor="password" >Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="password" name="password" className="input_inputbox" autoComplete="off"></input>
                </div>
                <div className="input_submit" >
                    <button className="input_submit_button" type="submit">
                       login
                    </button>
                </div>
                
                {error && <p className="input_error">{error}</p>}
           </form>
       </div>
   )
}

export default LoginForm;