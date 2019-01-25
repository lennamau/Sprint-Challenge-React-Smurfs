import React, { Component } from 'react';
import App from '../App';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
     <div>
        <img className= "smurf-logo" src={require('./logo-smurfs.png')} alt="Smurf logo"/>
        <div className="Smurfs--test">
        <div className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
