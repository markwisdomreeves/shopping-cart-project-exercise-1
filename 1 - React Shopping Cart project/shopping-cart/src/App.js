import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./conponents/Header";
import Section from "./conponents/Section";
import { DataProvider } from "./conponents/Context";


class App extends Component {

  render() {
    return (
      <DataProvider>
        <div className="App">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }   
}


export default App;
