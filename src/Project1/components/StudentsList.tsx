import React, { useState, useEffect } from "react";
import "./StudentsList.scss";
import { Link } from 'react-router-dom';
import api from "api";

interface Student {
  id: string;
  name: string;
  sex: string;
  email: string;
}

const StudentsList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get(`/students`);
        setStudents(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
    fetchStudents();
  }, []);

  const deleteStudent = async (id: string) => {
    try {
      await api.delete(`/students/${id}`);
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
      setError('Error deleting data');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
        <div className="list_overall">
          <div className="list_heading">students</div>
          <table className="list_table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>sex</th>
                <th>email</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.sex}</td>
                  <td>{student.email}</td>
                  <td>
                    <Link to={`/project1/students/${student.id}`} className="list_detail">detail</Link>
                    <Link to={`/project1/students/${student.id}/edit`} className="list_edit">edit</Link>
                    <button className="list_delete" onClick={() => deleteStudent(student.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/project1/students/add" className="list_button_add">add</Link>
        </div>
    </>
  );
}

export default StudentsList;
