import React, { useState, useEffect } from 'react';
    class Dashboard extends React.Component {
      render() {
        return (
          <div className="container">
            {this.props.lists.map((list, index) => (
              <div key={index} className="content">
                <div className="names"><h1>{list.forest_name}</h1></div>
                <div className="images">
                  <img src={list.image} alt="Image" />
                </div>
                <div className="status">
                  <p>{list.Content}% predicted for forest fire </p>
                </div>
                <div className="card">
                  <div className="label"><i className="fas fa-thermometer-half"></i> Temperature:</div>
                  <div>{list.temperature} °C</div>
                </div>
                <div className="card">
                  <div className="label"><i className="fas fa-tint"></i> Humidity:</div>
                  <div>{list.humidity} %</div>
                </div>
                <div className="card">
                  <div className="label"><i className="fas fa-wind"></i> Wind Speed:</div>
                  <div>{list.windspeed} km/h</div>
                </div>
                <div className="card">
                  <div className="label"><i className="fas fa-fire"></i> Forest Fuel Moisture Index:</div>
                  <div>{list.duffPercentage}</div>
                </div>
                
              </div>
            ))}
          </div>
        );
      }
    }

    const lists1 = [
      {
        forest_name: "KOLLI FOREST",
        Content: 12,
        temperature: 25,
        humidity: 60,
        windspeed: 10,
        duffPercentage: 80,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];

    const lists2 = [
      {
        forest_name: "PALANI HILLS",
        Content: 7,
        temperature: 29,
        humidity: 54,
        windspeed: 10,
        duffPercentage: 70,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];

    const lists3 = [
      {
        forest_name: "AKKAMALAI FOREST",
        Content: 6,
        temperature: 25,
        humidity: 60,
        windspeed: 10,
        duffPercentage: 80,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];

    const lists4 = [
      {
        forest_name: "KODAIKANAL FOREST",
        Content: 11,
        temperature: 29,
        humidity: 54,
        windspeed: 10,
        duffPercentage: 70,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];

    const lists5 = [
      {
        forest_name: "MEGAMALA FOREST",
        Content: 9,
        temperature: 25,
        humidity: 60,
        windspeed: 10,
        duffPercentage: 80,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];

    const lists6 = [
      {
        forest_name: "KURANGANI FOREST",
        Content: 6,
        temperature: 29,
        humidity: 54,
        windspeed: 10,
        duffPercentage: 70,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];

    const lists7 = [
      {
        forest_name: "NILGIRI FOREST",
        Content: 11,
        temperature: 29,
        humidity: 54,
        windspeed: 10,
        duffPercentage: 70,
        image: "../static/icon/sun.png" // Placeholder image URL
      },
    ];
    function WeatherApp(lat, lon,name) {
  const [list, setList] = React.useState(null);
  const [weatherData, setWeatherData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  

  React.useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=302ef7ffae9443af9b7171520241902&q=${lat},${lon}&aqi=no`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        const l = {
          forest_name: name,
          Content: 12,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          windspeed: data.current.wind_kph,
          duffPercentage: 80,
          image: "../static/icon/sun.png" // Placeholder image URL
        }
        setList(l);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);}
  // const URL="http://api.weatherapi.com/v1/current.json?key=302ef7ffae9443af9b7171520241902&q=11.25205660,78.357964968&aqi=no";

            // Get all area elements
            const areas = document.querySelectorAll('area');

            // Add event listener to each area
            areas.forEach(area => {
              area.addEventListener('click', () => {
                // Log the title attribute when clicked
                const title= area.getAttribute('title');
                
                if (title == 1){
                  WeatherApp(11.25205660, 78.357964968,"KOLLI FOREST");
                    ReactDOM.render(
      <Dashboard lists={list} />,
      document.getElementById("root")
    );
                }
                else if (title == 2){
                    // window.location.href = "httpa://localhost:5000/predict/2";
                    ReactDOM.render(
      <Dashboard lists={lists2} />,
      document.getElementById("root")
    );
                    
                }
                else if (title == 3){
                    // window.location.href = "http://localhost:5000/predict/3";
                    ReactDOM.render(
      <Dashboard lists={lists3} />,
      document.getElementById("root")
    );
                    
                }
                else if (title == 4){
                    // window.location.href = "http://localhost:5000/predict/4";
                    ReactDOM.render(
      <Dashboard lists={lists4} />,
      document.getElementById("root")
    );
                    
                }
                else if (title == 5){
                    // window.location.href = "http://localhost:5000/predict/5";
                    ReactDOM.render(
      <Dashboard lists={lists5} />,
      document.getElementById("root")
    );
                    
                }
                else if (title == 6){
                    // window.location.href = "http://localhost:5000/predict/6";
                    ReactDOM.render(
      <Dashboard lists={lists6} />,
      document.getElementById("root")
    );
                    
                }
                else if (title == 7){
                    // window.location.href = "http://localhost:5000/predict/7";
                    ReactDOM.render(
      <Dashboard lists={lists7} />,
      document.getElementById("root")
    );
                    
                }
                
              });
            });
