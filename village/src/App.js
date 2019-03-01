import React, { useState, useEffect } from 'react';
// import Route from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default function App() {
  const [smurfs, setSmurfs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSmurfs();
  })

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  const smurfsURL = 'http://localhost:3333/smurfs';

  const fetchSmurfs = () => {
    setError(null);
    setLoading(true);
    
    axios.get(smurfsURL)
      .then(resp => setSmurfs(resp.data))
      .catch(err => setError(err))
      .finally(setLoading(false));
  }

  const postSmurfs = (smurfObj) => {
    setError(null);
    setLoading(true);

    axios.post(smurfsURL, smurfObj)
      .then(resp => setSmurfs(resp.data))
      .catch(err => setError(err))
      .finally(setLoading(false));
  }

  if (loading) {
    return (
      <div> Just a moment, we're looking for your Smurfs!</div>
    );
  }  

  if (error) {
    return (
      <div>Looks like Gargamel caught all our Smurfs :( {error} </div>
    );
  } 

  return (
    <div className="App">
      <SmurfForm postSmurfs={postSmurfs}/>
      <Smurfs smurfs={smurfs} />
    </div>
  );
}


