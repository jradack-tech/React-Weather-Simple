import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ToggleSwitch from "./components/ToggleButton";

function App() {
  const [forecast, setForecast] = useState({});
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if(Object.keys(forecast).length !== 0) {
      setLoading(false);
    }
  }, [forecast]);

  const Weather =
    loading || Object.keys(forecast).length === 0 ? (
      <h1>Loading...</h1>
    ) : (
      <WeatherCard forecast={forecast} />
    );

  return (
    <Container className={`App ${theme}`}>
      <h1> Weather </h1>
      <SearchBox setForecast={setForecast}  setLoading={setLoading} /> 
      {Weather}
      <ToggleSwitch toggleTheme={toggleTheme} />
    </Container>);
}

const Container = styled.div`
    font-family: "neutra", sans-serif;
    height: 100%;
    min-height: 100vh;
    text-align: center;
    position: relative;
    &.dark {
      background-color: #0d2f45;
      color: #fff;
    }
    &.light {
        background-color: #fff;
        color: #0d2f45;
    }
    
    &.dark h1 {
        color: #fff;
    }
    
    &.light h1 {
        color: #0d2f45;
    }
    h1 {
      font-size: 64px;
      font-weight: 600;
      line-height: 52px;
      padding-bottom: 48px;
      padding-top: 128px;
      text-align: center;
    }
    @media screen and (max-width: 600px){
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 36px;
        line-height: 40px;
      }
    }
    `;

export default App;