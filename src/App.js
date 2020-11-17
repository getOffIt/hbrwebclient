import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      title: "",
      date: "Thursday Oct 29th 2020",
      content:""
    };
}

callAPI() {
  fetch("https://api.jsonbin.io/b/5f4cb60e4d8ce411138582b6/1")
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
        <h1 class="App-title">The Management Tip {this.state.title}</h1>
        <h2 class="App-tip-title">{this.state.date}</h2>
       <p>{this.state.content}</p>
         

      </div>
    );
  }

}

export default App;
