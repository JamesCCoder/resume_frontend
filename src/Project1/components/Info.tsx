import React, { useState, useEffect } from "react";
import "./Info.scss";
import api from "api";
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from "axios";

interface Student {
  id: string;
  name: string;
  sex: string;
  email: string;
}

interface Professor {
  id: string;
  name: string;
  sex: string;
  email: string;
}

const Info: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [student, setStudent] = useState<Student | null>(null);
  const [relatedProfessors, setRelatedProfessors] = useState<string[]>([]);
  const [professor, setProfessor] = useState<Student | null>(null);
  const [relatedStudents, setRelatedStudents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [type, setType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = location.pathname;
        let response;
   
        if (path.includes('students')) {
          response = await api.get(`/students/${id}`);
          
          setType('student');
          setStudent(response.data.student);
          // const professors = await Promise.all(
          //   response.data.student.professors.map((professorId:string) =>
          //     api.get(`/professors/${professorId}`)
          //       .then(response => response.data)
          //       .catch(error => null)
          //   )
          // );

          // setRelatedProfessors(professors.filter(prof => prof !== null));
          setRelatedProfessors(response.data.student.professors);
        } else if (path.includes('professors')) {
          response = await api.get(`/professors/${id}`);
          
          setType('professor');
          setProfessor(response.data.professor);
          setRelatedStudents(response.data.professor.students);
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id, location.pathname]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    {student && type === 'student' && (
      <div className="info_overall">
        <table className="info_table" cellPadding="10">
          <tbody>
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
            <tr className="info_line">
              <td>professors</td>
              {relatedProfessors && relatedProfessors.map((relatedProfessor, id) =>{
                return(
                    <td key={id}>{relatedProfessor}</td>  
                )
              })}
              
            </tr>
          </tbody>
        </table>
        <div className="info_buttons">
          <Link to={`/project1/students/${id}/edit`} className="info_button_edit">edit</Link>
          <Link to="/project1" className="info_button_back">back to main</Link>
        </div>
      </div>
    )} 
    {professor && type === 'professor' && (
      <div className="info_overall">
        <table className="info_table" cellPadding="10">
          <tbody>
            <tr className="info_line">
              <td>id</td>
              <td>{professor.id}</td>
            </tr>
            <tr className="info_line">
              <td>name</td>
              <td>{professor.name}</td>
            </tr>
            <tr className="info_line">
              <td>sex</td>
              <td>{professor.sex}</td>
            </tr>
            <tr className="info_line">
              <td>email</td>
              <td>{professor.email}</td>
            </tr>
            <tr className="info_line">
              <td>students</td>
              {relatedStudents.map((relatedStudent, id) =>{
                return(
                    <td key={id}>{relatedStudent}</td>  
                )
              })}
              
            </tr>
          </tbody>
        </table>
        <div className="info_buttons">
          <Link to={`/project1/students/${id}/edit`} className="info_button_edit">edit</Link>
          <Link to="/project1" className="info_button_back">back to main</Link>
        </div>
      </div>
    )}
    </>
  );
}

export default Info;
