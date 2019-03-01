import React from 'react';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

function Smurfs({ deleteSmurf, smurfs }) {

  const inputIdRef = React.createRef();

  return (
    <div>
      <h1>Smurf Village</h1>
      <div>
        <input
        placeholder="smurf id to delete"
        ref={inputIdRef}
        name="delete"
        type="text"
        />

        <button
          onClick={() => deleteSmurf(inputIdRef.current.value)}
        >
        Delete Smurf
        </button>
        
      </div>
      <div>
        {smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </div>
    </div>
  );

}

Smurf.defaultProps = {
 smurfs: [],
};

Smurf.propTypes = {
  smurfs: PropTypes.array,
  deleteSmurf: PropTypes.func,
}

export default Smurfs;
