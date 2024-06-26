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
  const [type, setType] = useState<'student' | 'professor'>('student');
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await api.get(`/${type}s/${id}`);
          setFormData(response.data);
        } catch (error) {
          setError(`Error fetching ${type} data`);
          console.error(`Error fetching ${type} data:`, error);
        }
      };
      fetchData();
    }
  }, [id, type]);

  useEffect(() =>{
      const path = window.location.pathname;
      setType(path.includes('/students/') ? 'student' : 'professor');
  },[])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as 'student' | 'professor');
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
        await api.put(`/${type}s/${id}`, formData);
      } else {
        await api.post(`/${type}s`, formData);
      }
      setFormData({
        name: '',
        sex: '',
        email: ''
      });
      navigate('/project1');
    } catch (error) {
      setError(id ? `Error updating ${type}` : `Error adding ${type}`);
      console.error(id ? `Error updating ${type}:` : `Error adding ${type}:`, error);
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
          <label htmlFor="type" className="input_label">Type: </label>
          <select id="type" name="type" value={type} onChange={handleTypeChange}>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="input_label">Name: </label>
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
          <label htmlFor="male" className="radio_label">Male</label>
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            checked={formData.sex === 'female'}
            className="radio_input"
            onChange={handleChange}
          />
          <label htmlFor="female" className="radio_label">Female</label>
        </div>
        <div>
          <label htmlFor="email" className="input_label">Email: </label>
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
            {id ? 'Update' : 'Add'}
          </button>
          <button className="input_cancel" type="button" onClick={cancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
