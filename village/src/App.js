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
  const [inputForm, setInputForm] = useState({name: '', age: '', height: ''});

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

  const postSmurfs = () => {
    setError(null);
    setLoading(true);

    axios.post(smurfsURL, inputForm)
      .then(resp => setSmurfs(resp.data))
      .catch(err => setError(err))
      .finally(setLoading(false));

    setInputForm({ name: '', age: '', height: '' });
  }

  const deleteSmurf = (id) => {
    setError(null);
    setLoading(true);

    axios.delete(`${smurfsURL}/${id}`)
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

  const errorScreen = () => {
    return (
      <div>
        <div>Looks like Gargamel caught all our Smurfs :( {error.message} </div>
        <NavLink to='/'><button onClick={() => setError(null)}>Go Back</button></NavLink>
      </div>
    );
  }

  // if there are any errors, render Error screen with message
  if (error) {
    return (
      <Route path="/" component={errorScreen} />
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
              inputForm={inputForm}
              setInputForm={setInputForm}
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
              deleteSmurf={deleteSmurf}
            />)
          }
        />
      </div>
    );
  }
}

