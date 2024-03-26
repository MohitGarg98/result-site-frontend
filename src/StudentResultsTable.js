// StudentResultsTable.js
import React from 'react';
import './StudentResultsTable.css';

const StudentResultsTable = ({ student }) => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <th colSpan="2">Subject</th>
            <th>Marks</th>
          </tr>
          <tr>
            <td colSpan="3"><hr /></td>
          </tr>
          <tr>
            <td colSpan="2"><strong>Chemistry</strong></td>
            <td>{student.chemistry}</td>
          </tr>
          <tr>
            <td colSpan="3"><hr /></td>
          </tr>
          <tr>
            <td colSpan="2"><strong>Physics</strong></td>
            <td>{student.physics}</td>
          </tr>
          <tr>
            <td colSpan="3"><hr /></td>
          </tr>
          <tr>
            <td colSpan="2"><strong>Hindi</strong></td>
            <td>{student.hindi}</td>
          </tr>
          <tr>
            <td colSpan="3"><hr /></td>
          </tr>
          <tr>
            <td colSpan="2"><strong>English</strong></td>
            <td>{student.english}</td>
          </tr>
          <tr>
            <td colSpan="3"><hr /></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'right' }}><strong>Percentage</strong></td>
            <td>{((student.chemistry + student.physics + student.hindi + student.english) / 4).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentResultsTable;
