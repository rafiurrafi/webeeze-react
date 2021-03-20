import React, { Component } from "react";
import "./styles/menu.css";
class Menu extends Component {
  state = {};
  render() {
    return (
      <section class="Menu">
        <div class="container page">
          <a href="#" class="menu-logo">
            Webeeze
          </a>
          <div class="menu-content">
            <ul class="menu-nav">
              <a href="#section-about">About</a>
              <a href="#section-team">Team</a>
              <a href="#section-projects">Project</a>
              <a href="#section-contact">Contact</a>
            </ul>
            <div class="menu-footer">
              <div>
                <h5>Address</h5>
                <p>Chirirbandar, 5240</p>
                <p>Dinajpur, Rangpur</p>
                <p>Bangladesh</p>
              </div>
              <div>
                <h5>Contact</h5>
                <p>+891237912312</p>
                <p>+983921873912</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
