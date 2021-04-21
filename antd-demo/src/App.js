import React, {Component} from 'react'
import { BrowserRouter as Router,Route ,Link} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import {render} from "@testing-library/react";
import Chip from './containers/chip/saga-test'
// import Demo from './main/demo'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <div>
                  <Route path="/chip" component={Chip} />
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
