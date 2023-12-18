import { useRef, useState } from 'react'

import formatTime from './utilities/formatTime';
import Button from './components/Button';

const initialValue = 0;

function App() {
  const [timer, setTimer] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false);
  const [m, s, ms] = formatTime(timer);
  
  const timeInterval = useRef(null);

  const handleStart = () => {  
    if(isRunning) return;

    setIsRunning(true);
    const startTime = Date.now() - timer;
    timeInterval.current = setInterval(() => {
      setTimer(Date.now() - startTime);
    }, 10)
  }

  const handleStop = () => {
    if(!isRunning) return;

    setIsRunning(false);
    clearInterval(timeInterval.current);
  }

  const handleReset = () => {
    setIsRunning(false);
    setTimer(initialValue);
    clearInterval(timeInterval.current);
  }

  return (
    <div className="wrapper">
      <div className="timer-container"><span>{m}</span> : <span>{s}</span> : <span>{ms}</span></div>
      <div className="button-container">
        <Button onClick={handleStart}>START</Button>
        <Button onClick={handleStop}>STOP</Button>
        <Button onClick={handleReset}>RESET</Button>
      </div>
    </div>
  )
}

export default App

