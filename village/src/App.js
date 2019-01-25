import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const baseURL = "http://localhost:3333";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state
  // and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get(`${baseURL}/smurfs`)
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }
  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${baseURL}/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink className="nav-link" to="/">
            Smurf Village
          </NavLink>
          <NavLink className="nav-link" to="/smurf-form">
            Update Smurfs
          </NavLink>
        </div>
        
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} 
          smurfs={this.state.smurfs}
          deleteSmurf ={this.deleteSmurf}
          />}
        />
        
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              updateSmurfs={this.state.updateSmurfs}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
