import React,{useState, useEffect} from "react";
import "./LoginForm.scss";

import api from "api";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Both username and password could not be empty');
            return;
        }

       try {
            const response = await api.post('/api/login', { username, password });
            if (response.data) {
                navigate('/project1/');
            } else {
                setError('Username and/or password are wrong');
            }
        } catch (error) {
            setError('Username and/or password are wrong');
            console.error('There was an error logging in!', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
        setError('Both username and password could not be empty');
        return;
    }

    try {
      const response = await api.post('/api/register', { username, password });
      if (response.status === 200) {
        alert('Registration successful!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };
   return (
       <div className="loginform_wrapper">
           <form className="loginform_form" onSubmit={location.pathname === "/project1/login" ? handleSubmit:handleRegisterSubmit}>
                <div className="input_label">
                    <label htmlFor="username">Username: </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" className="input_inputbox" autoComplete="off"></input>
                </div>
                <div className="input_label">
                    <label htmlFor="password" >Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="input_inputbox" autoComplete="off"></input>
                </div>
                <div className="input_submit" >
                    <button className="input_submit_button" type="submit">
                       {location.pathname === "/project1/login" ? 'Login' : 'Register'}
                    </button>
                </div>
                
                {error && <p className="input_error">{error}</p>}
                <div className="toggle_form">
                    <Link to={location.pathname === "/project1/login" ? "/project1/register" : "/project1/login"}>
                        
                         {location.pathname === "/project1/login" ? "Don't have an account? Register" : 'Already have an account? Login'}
                    </Link>
                </div>
           </form>
       </div>
   )
}

export default LoginForm;