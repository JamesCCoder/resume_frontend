import React, { useState, useEffect } from "react";
import "./ProfessorsList.scss";
import { Link } from 'react-router-dom';
import api from "api";

interface Professors {
  id: string;
  name: string;
  sex: string;
  email: string;
}

const ProfessorsList: React.FC = () => {
  const [professors, setProfessors] = useState<Professors[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await api.get(`/professors`);
        setProfessors(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
    fetchProfessors();
  }, []);

  const deleteProfessor = async (id: string) => {
    try {
      await api.delete(`/professors/${id}`);
      setProfessors(professors.filter(professor => professor.id !== id));
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
          <div className="list_heading">professors</div>
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
              {professors.map((professor) => (
                <tr key={professor.id}>
                  <td>{professor.id}</td>
                  <td>{professor.name}</td>
                  <td>{professor.sex}</td>
                  <td>{professor.email}</td>
                  <td>
                    <Link to={`/project1/professors/${professor.id}`} className="list_detail">detail</Link>
                    <Link to={`/project1/professors/${professor.id}/edit`} className="list_edit">edit</Link>
                    <button className="list_delete" onClick={() => deleteProfessor(professor.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/project1/professors/add" className="list_button_add">add</Link>
        </div>
    </>
  );
}

export default ProfessorsList;
