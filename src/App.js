import React from 'react';
import "./styles/app.scss"
import './App.css';
import Row from './Row';

import requests from './requests';
function App() {
  return (
    <div className="App">
      <h1>Hello World of clonning</h1>
      
      <Row  title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     
      <Row  title="Trending" fetchUrl={requests.fetchTrending} />
      <Row  title="Action Titles" fetchUrl={requests.fetchActionMovies} /> 
      <Row  title="Top Rated Titles" fetchUrl={requests.fetchTopRated} />  
    </div>
  );
}

export default App;
