import './App.css';
import SearchBar from "../src/component/search-bar/search-bar.component.jsx";
import CardList from "../src/component/card-list/CardList.jsx";
import React, { Component } from 'react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar></SearchBar>
        <CardList></CardList>
    </div>
    )
  }
}


export default App;
