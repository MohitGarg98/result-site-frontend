import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ResultsPage from './ResultPage';
import RollNoPage from './RollNoPage';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider >
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<RollNoPage />} />
          <Route exact path="/result" element={<ResultsPage />} />
        </Routes>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
