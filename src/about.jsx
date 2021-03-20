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
          <h2>We do _</h2>
          {abouts.map((about) => (
            <div key={about._id} className="single-content">
              <img src={about.imgSrc} alt="" className="single-img" />
              <h3>{about.heading}</h3>
              <p className="text">{addLineBreak(about.text)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default About;
