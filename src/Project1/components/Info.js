import React,{useState, useEffect} from "react";
import "./Info.scss";

import api from "api";

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Info = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        const fetchStudent = async () => {
        try {
            const response = await api.get(`/students/${id}`);
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
                <div className="info_buttons">
                    <Link to = {`/project1/${id}/edit`} className="info_button_edit">edit</Link>
                    <Link to = "/project1" className="info_button_back">back to main</Link>
                </div>
            </div>
        ) : (
        <div>No student found</div>
        )
    )
}

export default Info;
