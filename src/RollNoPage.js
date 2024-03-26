import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function RollNoPage() {
  const navigate = useNavigate();

  const [rollNumber, setRollNumber] = useState('');

  const handleInputChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/result?rollNo=${rollNumber}`)
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="centered-form">
          <h1>Enter Roll Number</h1>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default RollNoPage;
