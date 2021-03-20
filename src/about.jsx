import React, { Component } from "react";
import aboutService from "./service/aboutService";
import { addLineBreak } from "./utils/formatString";
class About extends Component {
  state = {
    abouts: [],
  };
  componentDidMount() {
    const abouts = [...aboutService];
    this.setState({ abouts });
  }

  render() {
    const { abouts } = this.state;
    return (
      <section className="About section" id="section-about">
        <div className="container page">
          {abouts.map((about) => (
            <div key={about._id} className="single-content">
              <h2>{about.heading}</h2>
              <p className="text">{addLineBreak(about.text)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default About;
