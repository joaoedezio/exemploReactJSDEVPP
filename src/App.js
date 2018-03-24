import React, { Component } from 'react';
import logo from './logo.svg';
import members from "./participantsList";
import ListView from "./components/listView";
import FilterBar from "./components/filterBar";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterStr: "",
        };
        this.timer = null;
    }

    onFilterBarChanged(str) {
        if(!this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.setState({
                filterStr: str,
            });
        }, 300);
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Listagem de membros DEV-PP</h1>
        </header>
        <FilterBar
            onChange={(str) => this.onFilterBarChanged(str)}
        />
        <ListView
            members={members}
            filterStr={this.state.filterStr}
        />
      </div>
    );
  }
}

export default App;
