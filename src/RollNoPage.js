import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
// import {getDatabase, ref, set, child, orderByChild, equalTo, get} from 'firebase/database';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { app } from './firebase';

function RollNoPage() {
  const navigate = useNavigate();
  const firestore = getFirestore(app); 
  
  const [rollNumber, setRollNumber] = useState('');
  
  const writeData = async () => {

    // const studentsJsonData = [
    //   {
    //     "ROLL NO": 5619286,
    //     "CANDIDATE NAME": "AAYUSH KUMAWAT",
    //     "FATHER'S NAME": "MAHESH KUMAWAT",
    //     "SCHOOL NAME": "G.C.M. SCHOOL",
    //     "CLASS": "11 (PCM)",
    //     "MEDIUM": "HINDI",
    //     "SECTION - A": 8,
    //     "SECTION - B": 4,
    //     "SECTION - C": 2,
    //     "SECTION - D": 2,
    //     "SECTION - E": 12
    //   },
    //   {
    //     "ROLL NO": 5619203,
    //     "CANDIDATE NAME": "AISHWARIYA JOSHI",
    //     "FATHER'S NAME": "AMIT JOSHI",
    //     "SCHOOL NAME": "M.G.G.SCHOOL",
    //     "CLASS": "11 (PCM)",
    //     "MEDIUM": "ENGLISH",
    //     "SECTION - A": 10,
    //     "SECTION - B": 10,
    //     "SECTION - C": 6,
    //     "SECTION - D": 8,
    //     "SECTION - E": 10
    //   },
    //   {
    //     "ROLL NO": 5619129,
    //     "CANDIDATE NAME": "AKASH GAYARI",
    //     "FATHER'S NAME": "BHERU LAL GAYARI",
    //     "SCHOOL NAME": "V.N.S. SCHOOL",
    //     "CLASS": "11 (PCM)",
    //     "MEDIUM": "HINDI",
    //     "SECTION - A": 8,
    //     "SECTION - B": 2,
    //     "SECTION - C": 0,
    //     "SECTION - D": 4,
    //     "SECTION - E": 8
    //   },
    //   {
    //     "ROLL NO": 5619023,
    //     "CANDIDATE NAME": "ANJANA VAISHNAV",
    //     "FATHER'S NAME": "BHERU DAS",
    //     "SCHOOL NAME": "G.C.M. SCHOOL",
    //     "CLASS": "11 (PCM)",
    //     "MEDIUM": "HINDI",
    //     "SECTION - A": 8,
    //     "SECTION - B": 4,
    //     "SECTION - C": 4,
    //     "SECTION - D": 6,
    //     "SECTION - E": 2
    //   },
    //   {
    //     "ROLL NO": 5619446,
    //     "CANDIDATE NAME": "ANKIT JATAV",
    //     "FATHER'S NAME": "RAJU JATAV",
    //     "SCHOOL NAME": "G.C.M. SCHOOL",
    //     "CLASS": "11 (PCM)",
    //     "MEDIUM": "HINDI"
    // }]

    // studentsJsonData.map(async data => {
    //   const result = await addDoc(collection(firestore, "students"), data)
    // })

    const studentsCollection = collection(firestore, "students")
    const q = query(studentsCollection, where("ROLL NO", "==", 5619203))
    const snapshot = await getDocs(q)
    snapshot.forEach(data => console.log('1', data.data()))


    // this below code is for realtime database

    //for insert data
    // set(ref(db, "students"), {
    //     id: "123",
    //     name: "rahul",
    //     add: "sadri"
    //   })
   
    // const studentsRef = ref(db);
    // const studentKey = "1"; // Example key

    // const studentQuery = child(studentsRef, studentKey);

    // get(studentQuery).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //     // Access individual properties like snapshot.val().id, snapshot.val().name, etc.
    //   } else {
    //     console.log("No data available for the specified roll number");
    //   }
    // }).catch((error) => {
    //   console.error("Error getting data:", error);
    // });

  }
  useEffect(() => {
    console.log('111111111');
    writeData()
  }, [])

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
