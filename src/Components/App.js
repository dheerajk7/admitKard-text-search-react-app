import React, { Component } from "react";
import "../Styles/App.scss";
import Search from "./Search";
import AddQuestion from "./AddQuestion";

class App extends Component {
  // rendering main app component
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search />
          <AddQuestion />
        </div>
      </div>
    );
  }
}

export default App;
