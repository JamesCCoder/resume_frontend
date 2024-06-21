import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./Input.scss";
import api from "api";
import { useNavigate, useParams } from 'react-router-dom';

interface FormData {
  name: string;
  sex: string;
  email: string;
}

const Input: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    sex: '',
    email: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (id) {
      const fetchStudentData = async () => {
        try {
          const response = await api.get(`/students/${id}`);
          setFormData(response.data);
        } catch (error) {
          setError('Error fetching student data');
          console.error('Error fetching student data:', error);
        }
      };
      fetchStudentData();
    }
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = (): string => {
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

  const submitClick = async (e: FormEvent) => {
    e.preventDefault();
    const validationMessage = validate();
    if (validationMessage) {
      setValidationError(validationMessage);
      return;
    }
    try {
      if (id) {
        await api.put(`/students/${id}`, formData);
      } else {
        await api.post(`/students`, formData);
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
  };

  const cancelClick = () => {
    setFormData({
      name: '',
      sex: '',
      email: ''
    });
    navigate('/project1');
  };

  return (
    <div className="input_overall">
      <form className="input_form" autoComplete="off" onSubmit={submitClick}>
        <div>
          <label htmlFor="name" className="input_label">name: </label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="input_inputbox"
            autoComplete="off"
          />
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
          <input
            value={formData.email}
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
            className="input_inputbox"
            autoComplete="off"
          />
        </div>
        {validationError && <p className="error">{validationError}</p>}
        <div className="input_buttons">
          <button className="input_submit" type="submit">
            {id ? 'update' : 'add'}
          </button>
          <button className="input_cancel" type="button" onClick={cancelClick}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
