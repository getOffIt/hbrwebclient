import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      title: "",
      content:""
    };
}

callAPI() {
  fetch("https://api.jsonbin.io/b/5f4cb60e4d8ce411138582b6")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res,
           title: res.title,
           content: res.content }));

}

componentWillMount() {
    this.callAPI();

}

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
       <p>{this.state.content}</p>
         

      </div>
    );
  }

}

export default App;
