import React from "react";
import "./StudentResultsTable.css";

const StudentResultsTable = ({ studentResult }) => {
  const convertToPDF = () => {
    window.print(); // Opens the browser's print dialog
  };
  const totalMarks = (Number(studentResult['SECTION - A']) ?? 0) + 
    (Number(studentResult['SECTION - B']) ?? 0) + 
    (Number(studentResult['SECTION - C']) ?? 0) +
    (Number(studentResult['SECTION - D']) ?? 0) + 
    (Number(studentResult['SECTION - E']) ?? 0);
  return (
    <div className="result-container">
      <h1>Dr. Kalam Coaching Classes</h1>
      <h2>Scholarship Result</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Name:</strong>
            </td>
            <td>{studentResult['CANDIDATE NAME']}</td>
            <td>
              <strong>Roll No:</strong>
            </td>
            <td>{studentResult['ROLL NO']}</td>
          </tr>
          <tr>
            <td>
              <strong>Father's Name:</strong>
            </td>
            <td>{studentResult["FATHER'S NAME"]}</td>
            <td>
              <strong>School Name:</strong>
            </td>
            <td>{studentResult['SCHOOL NAME']}</td>
          </tr>
          <tr>
            <td>
              <strong>Class:</strong>
            </td>
            <td>{studentResult['CLASS']}</td>
            <td>
              <strong>Medium:</strong>
            </td>
            <td>{studentResult['MEDIUM']}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Max Marks</th>
              <th>Obtained Marks</th>
            </tr>
          </thead>
          <tbody>


            <tr>
              <td>SECTION - A</td>
              <td>{50}</td>
              <td>{studentResult['SECTION - A'] ?? 0}</td>
            </tr>

            <tr>
              <td>SECTION - B</td>
              <td>{50}</td>
              <td>{studentResult['SECTION - B'] ?? 0}</td>
            </tr>

            <tr>
              <td>SECTION - C</td>
              <td>{50}</td>
              <td>{studentResult['SECTION - C'] ?? 0}</td>
            </tr>

            <tr>
              <td>SECTION - D</td>
              <td>{50}</td>
              <td>{studentResult['SECTION - D'] ?? 0}</td>
            </tr>

            <tr>
              <td>SECTION - E</td>
              <td>{50}</td>
              <td>{studentResult['SECTION - E'] ?? 0}</td>
            </tr>


            <tr>
              <td>
                <strong>Total Marks:</strong>
              </td>
              <td>{250}</td>
              <td>{totalMarks ? totalMarks : 0}</td>
            </tr>
            <tr>
              <td>
                <strong>Rank:</strong>
              </td>
              <td colSpan="2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={convertToPDF}>Convert to PDF</button>
    </div>
  );
};

export default StudentResultsTable;
