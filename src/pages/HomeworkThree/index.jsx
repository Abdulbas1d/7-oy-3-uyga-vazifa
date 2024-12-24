import React, { useEffect, useState } from 'react'
import './index.css';

function HomeworkThree() {
  const [city, setCity] = useState("Asia/Tashkent")
  const [time, setTime] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date()
      const formatter = new Intl.DateTimeFormat("uz-UZ", {
        timeZone: city,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setTime(formatter.format(time))
    }, 1000)
    return () => clearInterval(intervalId);
  }, [city])

  function handleCityTime(event) {
    setCity(event.target.value)
  }

  return (
    <div className='container_country'>
      <form className="form">
        <h2>Mahalliy Vaqtni Ko'rsatish</h2>
        <label htmlFor="city">Shaharni tanlang!</label>
        <select value={city} onChange={handleCityTime} name="city" id="city">
          <option value="Asia/Tashkent">Tashkent</option>
          <option value="Europe/London">London</option>
          <option value="Europe/Warsaw">Poland</option>
          <option value="Asia/Tokyo">Tokio</option>
          <option value="America/New_York">America</option>
          <option value="Europe/Paris">Paris</option>
          <option value="Europe/Rome">Italy</option>
          <option value="Europe/Vienna">Austria</option>
        </select>
        <h4>Vaqt: {" "} {time}</h4>
      </form>
    </div>
  )
}

export default HomeworkThree
