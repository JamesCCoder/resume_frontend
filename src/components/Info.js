import React,{useState, useEffect} from "react";
import "./Info.scss";

import axios from 'axios';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Info = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        const fetchStudent = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/students/${id}`);
            setStudent(response.data); 
            setLoading(false); 
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
            setLoading(false); 
        }
        };
        fetchStudent();
    }, [id]); 
    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
     student ? (
        <div className="info_overall">
                <table className="info_table" cellPadding="10">
                    <tr className="info_line">
                        <td>id</td>
                        <td>{student.id}</td>
                    </tr>
                    <tr className="info_line">
                        <td>name</td>
                        <td>{student.name}</td>
                    </tr>
                    <tr className="info_line">
                        <td>sex</td>
                        <td>{student.sex}</td>
                    </tr>
                    <tr className="info_line">
                        <td>email</td>
                        <td>{student.email}</td>
                    </tr>
                </table>
                <Link to = "/project1" className="info_button">back to main</Link>
            </div>
        ) : (
        <div>No student found</div>
        )
    )
}

export default Info;
