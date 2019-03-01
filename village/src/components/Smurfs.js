import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {

  inputIdRef = React.createRef();

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div>
          <input
          placeholder="smurf id to delete"
          ref={this.inputIdRef}
          name="delete"
          type="text"
        />
          <button onClick={() => this.props.deleteSmurf(this.inputIdRef.current.value)}
          >Delete Smurf</button>
        </div>
        <ul>
          {this.props.smurfs.map(smurf => {
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
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
