// StudentResultRow.js
import React from 'react';

const StudentResultRow = ({ student }) => {
  return (
    <div>
      <h2>{student.name}'s Results</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chemistry</td>
            <td>{student.chemistry}</td>
          </tr>
          <tr>
            <td>Physics</td>
            <td>{student.physics}</td>
          </tr>
          <tr>
            <td>Hindi</td>
            <td>{student.hindi}</td>
          </tr>
          <tr>
            <td>English</td>
            <td>{student.english}</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Percentage:</strong> {((student.chemistry + student.physics + student.hindi + student.english) / 4).toFixed(2)}</p>
    </div>
  );
};

export default StudentResultRow;
