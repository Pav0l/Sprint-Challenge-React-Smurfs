import React from 'react';
import PropTypes from 'prop-types';

export default function SmurfForm({ postSmurfs, inputForm, setInputForm }) {

  const addSmurf = event => {
    event.preventDefault();
    postSmurfs();
  }

  const handleInputChange = e => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={addSmurf}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={inputForm.name}
          name="name"
        />
        <input
          onChange={handleInputChange}
          placeholder="age"
          value={inputForm.age}
          name="age"
        />
        <input
          onChange={handleInputChange}
          placeholder="height"
          value={inputForm.height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

SmurfForm.defaultProps = {
  inputForm: {
    name: '',
    age: '',
    height: '',
  }
}

SmurfForm.propTypes = {
  postSmurfs: PropTypes.func,
  inputForm: PropTypes.object,
  setInputForm: PropTypes.func,
}
