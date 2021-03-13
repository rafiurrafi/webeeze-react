import React, { Component } from "react";
class App extends Component {
  state = {
    showMenu: false,
  };
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  render() {
    return <div className="App"></div>;
  }
}

export default App;
