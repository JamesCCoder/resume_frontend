import React,{useState, useEffect} from "react";
import "./Input.scss";

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

const Input = () =>{

    const apiBaseUrl = "james-resume-backend-9a3094b7738e.herokuapp.com";
    // process.env.REACT_APP_API_BASE_URL;

    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        sex: '',
        email: ''
    });

    const [error, setError] = useState(null);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (id) {
            // will get data if id exists -> eidt model
            const fetchStudentData = async () => {
                try {
                    const response = await axios.get(`${apiBaseUrl}/students/${id}`);
                    setFormData(response.data);
                } catch (error) {
                    setError('Error fetching student data');
                    console.error('Error fetching student data:', error);
                }
            };

            fetchStudentData();
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };


    const validate = () => {
        if (!formData.name) {
            return 'Name is required';
        }
        if (!formData.email) {
            return 'Email is required';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            return 'Invalid email address';
        }
        if (!formData.sex) {
            return 'Sex is required';
        }
        return '';
    };

    const submitClick = async(e) =>{
        e.preventDefault();
        const validationMessage = validate();
        if (validationMessage) {
            setValidationError(validationMessage);
            return;
        }
        try {
         if (id) {
                await axios.put(`${apiBaseUrl}/students/${id}`, formData);
            } else {
                await axios.post(`${apiBaseUrl}/students`, formData);
            }

                setFormData({
                    name: '',
                    sex: '',
                    email: ''
                });

            navigate('/project1');
            } catch (error) {
                setError(id ? 'Error updating student' : 'Error adding student');
                console.error(id ? 'Error updating student:' : 'Error adding student:', error);
            }
    }

    const cancelClick = (e) =>{
        setFormData({
        name: '',
        sex: '',
        email: ''
      });
      navigate('/project1');
    }


   return (
       <div className="input_overall">
           <form className="input_form" autoComplete="off" onSubmit={submitClick}>
                <div>
                    <label htmlFor="name" className="input_label">name: </label>
                    <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" className="input_inputbox" autoComplete="off"></input>
                </div>
                
                <div className="input_radio">
                    <input 
                        type="radio" 
                        id="male" 
                        name="sex" 
                        value="male" 
                        checked={formData.sex === 'male'} 
                        className="radio_input"
                        onChange={handleChange}
                    />
                    <label htmlFor="male" className="radio_label">male</label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="sex" 
                        value="female"  
                        checked={formData.sex === 'female'} 
                        className="radio_input"
                        onChange={handleChange}
                    />
                    <label htmlFor="female" className="radio_label">female</label>
                </div>
                
                <div>
                    <label htmlFor="email" className="input_label">email: </label>
                    <input value={formData.email} onChange={handleChange} type="text" id="email" name="email" className="input_inputbox" autoComplete="off"></input>
                </div>
                {validationError && <p className="error">{validationError}</p>}
                <div className="input_buttons">
                    <button className="input_submit" type="submit">
                       {id ? 'update' : 'add'}
                    </button>
                    <button className="input_cancel" type="button" onClick={e => cancelClick(e)}>
                       cancel
                    </button>
                </div>
               
           </form>
           
           
       </div>
   )
}

export default Input;