import React, { useEffect, useState } from 'react';
import StudentResultsTable from './StudentResultsTable';

const students = [
  { name: 'Student 1', chemistry: 85, physics: 90, hindi: 75, english: 80 }
];

const selectedStudent = students[0];

const StudentResultsPage = ({rollNo}) => {
  const [studentResultVal, setStudentResultVal] = useState({});

  useEffect(() => {
    //fetch data through rollNo from students result table

  }, [])

  return (
    <div>
      <h1>{rollNo}'s Results</h1>
      <StudentResultsTable student={selectedStudent} rollNo={rollNo}/>
    </div>
  );
};

export default StudentResultsPage;
