import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="container">
        <div className="card">
          <div className="label">Temperature: </div>
          <div>{this.state.temperature} °C</div>
        </div>
        <div className="card">
          <div className="label">Humidity: </div>
          <div>{this.state.humidity} %</div>
        </div>
        <div className="card">
          <div className="label">Duff Percentage: </div>
          <div>{this.state.duffPercentage} %</div>
        </div>
      </div>
    </div>
  );
}

export default App;