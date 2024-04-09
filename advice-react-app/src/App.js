import React, { useState, useEffect} from "react";
import axios from "axios";

import './App.css';

const App = () => {

  const [advice, setAdvice] = useState('');
  useEffect(() => {
    fetchAdvice();
  }, [])

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      const {advice} = res.data.slip;
        console.log(advice);
        setAdvice(advice);
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">
          {advice}
        </h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
