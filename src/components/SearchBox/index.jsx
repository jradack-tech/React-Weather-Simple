import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";

import data from "../../data";
import api from "../../services/api";

const SearchBox = (props) => {
  const [locations, setLocations] = useState([]);

  const key = "88c71e73f686930e46c69f46f4cf4481";
  
  const handleOnSelect = (location) => {
    props.setLoading(true);
    api
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
      )
      .then((forecast) => {
        props.setForecast(forecast.data);
        console.log(forecast);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOnSearch = async (string, results) => {
    const result = data.filter((location) => {
      return location.name.toLowerCase().includes(string.toLowerCase());
    });
    setLocations(result);
  };

  return (
    <Container>
      <ReactSearchAutocomplete
        items={locations}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        autofocus
        placeholder="Enter your location..."
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 48px;
  text-align: center;
  & > *:first-child {
    margin: auto;
    max-width: 700px;
    width: 100%
  }
`;

export default SearchBox;
