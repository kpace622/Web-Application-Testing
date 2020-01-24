import React, { useState } from 'react';
import './App.css';

  export const addStrikeTest = currentScore => {
    return currentScore + 1;
  }

function App() {

  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

//Logic for the buttons
  const addStrike = () => {
    if (strike < 2) {
      setStrike(strike + 1)
    } else if (strike === 2) {
      alert("3 strikes, you're out!")
      resetCount()
    }
  }

  const addBall = () => {
    if (ball < 3) {
      setBall(ball + 1)
    } else if (ball === 3) {
      alert('4 balls, take a Walk')
      resetCount()
    }
  }

  const resetCount = () => {
    setStrike(0)
    setBall(0)
  }

  const foul = () => {
    if (strike < 2) {
      setStrike(strike + 1)
    }
  }

  const hit = () => {
    resetCount()
  }

  return (
    <div className="App">
      <section className='display'>
        <div className='counter'>
          <div className='strike'>
            <h2>Strikes</h2>
            <div  className='strike-count'>{strike}</div>
          </div>
          <div className='ball'>
            <h2>Balls</h2>
            <div className='ball-count'>{ball}</div>
          </div>
        </div>  

        <div className='button-container'>
          <section className='buttons'>
            <button className='button' onClick={addStrike}>Strike</button>
            <button className='button' onClick={addBall}>Ball</button>
            <button className='button' onClick={foul}>Foul</button>
            <button className='button' onClick={hit}>Hit</button>
          </section>
        </div>
      </section>
    
    </div>
  );
}

export default App;