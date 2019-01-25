import React from 'react';
import Smurfs from './Smurfs'

const Smurf = props => {
  return (
    <div className="smurf-container">
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="myButton" type="submit" onClick={e => props.deleteSmurf(e, props.id)}>
        Remove Smurf
      </button>
    </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  id: ''
};

export default Smurf;

