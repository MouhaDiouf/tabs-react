import { useState } from 'react';
import './App.css';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  return <div className="App"></div>;
}

export default App;
