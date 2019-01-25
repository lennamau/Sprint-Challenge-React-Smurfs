import React, { Component } from "react";
import axios from "axios";

const baseURL = "http://localhost:3333";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    //event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post(`${baseURL}/smurfs`, newSmurf)
      .then(res => {
        console.log(res.data);
        this.props.updateSmurfs(res.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));


    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
      <h2>Add Smurf</h2>
        <form className = "form-items" onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <div className="baseline" />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <div className="baseline" />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className="baseline" />
          <button className= "myButton-form" type="submit" onClick={this.addSmurf}>
            Add to Village
          </button>

        </form>
      </div>
    );
  }
}

export default SmurfForm;
