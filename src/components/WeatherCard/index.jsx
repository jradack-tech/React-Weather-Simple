import React, { useEffect } from "react";
import styled from "styled-components";
import statusFromCode from "../../services/serviceFromCode";

const WeatherCard = ({ forecast }) => {
  useEffect(()=> {console.log(forecast)}, [])
  return (
    <Container>
      <h3>Temperature: {forecast.current_weather.temperature}</h3>
      <h6>{statusFromCode(parseInt(forecast.current_weather.weathercode))}</h6>
    </Container>
  );
};

const Container = styled.div`
  color: #32325d;
  margin: auto;
  padding: 10px;
  max-width: 500px;
  width: 100%;
  background-color: #72e1b3;
  border-radius: 30px;
  h2 {
    font-size: 52px;
    font-weight: 400;
    line-height: 52px;
    padding-bottom: 48px;
    padding-top: 48px;
    text-align: center;
  }
  h6 {
    font-size: 2rem;
    margin-bottom: 32px;
  }
  img {
    width: 150px;
  }
  @media screen and (max-width: 600px){
    width: 75%;
    h1 {
      font-size: 40px;
      line-height: 25px;
    }
  }
  @media screen and (max-width: 400px){
    width: 75%;
    padding: 0px;
    h1 {
      font-size: 30px;
      line-height: 15px;
    }
  }
`;

export default WeatherCard;
