import React from 'react';
import './App.css';
import Stars from './components/Stars/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={5}/>
    </div>
  );
}

export default App;
