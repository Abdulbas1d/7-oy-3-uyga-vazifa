import React, { useEffect, useState } from 'react'
import './index.css';

function HomeworkOne() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <div className='container'>
        <h2 className='coach'>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default HomeworkOne
