import React, { useState } from 'react';
import './index.css';

function HomeworkTwo() {
  const [time, setTime] = useState("");
  const [timerId, setTimerId] = useState(null);
  const [inputTime, setInputTime] = useState(null);

  function validate() {
    if (!time) {
      alert("Biror bir son kiritishingiz kerak!");
      return false;
    }
    return true;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function handleStart(event) {
    event.preventDefault();

    let isValid = validate();
    if (!isValid) {
      return;
    }

    if (timerId) return;

    setInputTime(time);
    setTime("");

    const id = setInterval(() => {
      setInputTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          setTimerId(null);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimerId(id);
  }

  function handleReset() {
    setTime("");
    setInputTime(null);
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }

  return (
    <div className='container_time'>
      <form className="form">
        <h2>Timer</h2>
        <h4>{inputTime !== null ? formatTime(inputTime) : "00:00"}</h4>
        <label htmlFor="time">Biror bir son kiriting!</label>
        <input value={time} onChange={(e) => setTime(Number(e.target.value))} id='time' name='time' type="number" placeholder='Biror bir son kiriting!' disabled={timerId !== null} />
        <div className="btns">
          <button onClick={handleStart} className='btnOne' disabled={timerId !== null}>Start</button>
          <button onClick={handleReset} className='btnTwo'>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default HomeworkTwo;