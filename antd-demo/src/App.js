import React, {Component, PureComponent} from 'react'
import { BrowserRouter as Router,Route ,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {render} from "@testing-library/react";
import List from './List'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <div>
                    <h1>App</h1>
                    <ul>
                        <li><Link to="/list">List</Link></li>
                    </ul>
                    <hr/>
                    <Route path="/list" component={List} />
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
