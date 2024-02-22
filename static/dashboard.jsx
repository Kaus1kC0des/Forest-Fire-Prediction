// dashboard.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './dash.css';
const Dashboard = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [tuff, setTuff] = useState(0);
  const [fuelLevel, setFuelLevel] = useState(0);

  // Function to simulate updating data
  const updateData = () => {
    setTemperature(Math.floor(Math.random() * 100));
    setHumidity(Math.floor(Math.random() * 100));
    setTuff(Math.floor(Math.random() * 100));
    setFuelLevel(Math.floor(Math.random() * 100));
  };

  return (
    <div className="dashboard">
      <div className="data-container">
        <h2>Temperature: {temperature}°C</h2>
      </div>
      <div className="data-container">
        <h2>Humidity: {humidity}%</h2>
      </div>
      <div className="data-container">
        <h2>Tuff: {tuff}</h2>
      </div>
      <div className="data-container">
        <h2>Fuel Level: {fuelLevel}%</h2>
      </div>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));