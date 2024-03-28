import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { app } from './firebase';
import './App.css';
import StudentResultsTable from './StudentResultsTable';

function RollNoPage() {
  const firestore = getFirestore(app); 
  // const navigate = useNavigate();  

  const [rollNumber, setRollNumber] = useState('');
  const[studentResult, setStudentResult] = useState('')

  const handleInputChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getResultData()
    // navigate(`/result?rollNo=${rollNumber}`)
  };

  const getResultData = async () => {
    // code for get document 5619023
    const studentsCollection = collection(firestore, "students")
    const q = query(studentsCollection, where("ROLL NO", "==", Number(rollNumber)))
    const snapshot = await getDocs(q)
    if(!snapshot.docs.length){
      alert('you entered an incorrect roll No.')
    } else {
      snapshot.forEach(data => {
        setStudentResult(data.data())
      })
    }
  }
  useEffect(() => {
    // studentsJsonData.map(async data => {
    //   const result = await addDoc(collection(firestore, "students"), data)
    // })
  }, [])

  return (
   <>
   {
    studentResult ? 
    <StudentResultsTable studentResult={studentResult}/> :
    <div className="App">
      <header className="App-header">
        <div className="centered-form">
          <h3>Dr. Kalam Coaching Classes</h3>
          <h4>Scholarship Result</h4>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="number"
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  }
  </>
  );
}

export default RollNoPage;
