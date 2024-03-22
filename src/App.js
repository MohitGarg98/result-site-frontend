import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [allUsersData, setAllUsersData] = useState([]);

  const getUserData = async () => {
    const userData = await axios.get('https://result-site.onrender.com/example/user-data');
    setAllUsersData(userData.data)
    console.log('userData', userData.data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="App">
      {
        allUsersData.map(data => {
          return <h3>User Name is {data.name}</h3>
        })
      }
    </div>
  );
}

export default App;
