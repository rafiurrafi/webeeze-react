import React, { Component } from "react";
import Socials from "./socials";
import "font-awesome/css/font-awesome.css";
import "./styles/app.css";
import Messanger from "./messanger";
import Sidebar from "./sidebar";
import About from "./about";
import Projects from "./projects";
import Team from "./team";
import Contact from "./contact";
import MenuIcon from "./common/menuIcon";
import Menu from "./menu";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Socials />
        <Messanger />
        <Sidebar />
        <main>
          <About />
          <Projects />
          <Team />
          <Contact />
          <Menu />
          <MenuIcon />
        </main>
      </div>
    );
  }
}

export default App;
