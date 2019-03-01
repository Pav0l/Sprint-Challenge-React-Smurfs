import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default function App() {
  const [smurfs, setSmurfs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // On component MOUNT fetch smurfs from server
  useEffect(() => {
    fetchSmurfs();
  }, [])

  const smurfsURL = 'http://localhost:3333/smurfs';

  const fetchSmurfs = () => {
    // reset any previous errors
    setError(null);
    // start loading the page
    setLoading(true);
    
    axios.get(smurfsURL)
      .then(resp => setSmurfs(resp.data))
      .catch(err => setError(err))
      // once the response/errors are updated stop the loader
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

  // if the loader is started, render Loading screen
  if (loading) {
    return (
      <div> Just a moment, we're looking for your Smurfs!</div>
    );
  }  

  // if there are any errors, render Error screen with message
  if (error) {
    return (
      <div>Looks like Gargamel caught all our Smurfs :( {error.message} </div>
    );
  } 

  else {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/smurf-form">Add Smurfs Form</NavLink>
        </nav>

        <Route
          exact
          path="/smurf-form"
          render={(props) =>
            (<SmurfForm
              {...props}
              postSmurfs={postSmurfs}
            />)
          }
        />
        
        <Route
          exact
          path="/"
          render={(props) =>
            (<Smurfs
              {...props}
              smurfs={smurfs}
            />)
          }
        />
      </div>
    );
  }
}

