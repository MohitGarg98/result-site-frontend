import React from 'react';
import './App.css';
import StudentResultsPage from './StudentResultsPage';

function ResultPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const rollNumber = urlParams.get('rollNo');

  return (
    <div>
        <StudentResultsPage rollNo={rollNumber}/>
    </div>
  );
}

export default ResultPage;
