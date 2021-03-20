import React, { Component } from "react";
import socials from "./service/socialService";
import "./styles/socials.css";
class Socials extends Component {
  state = {
    socials: [],
  };
  componentDidMount() {
    const socialService = [...socials];
    this.setState({ socials: socialService });
  }
  render() {
    const { socials } = this.state;
    return (
      <div className="Socials">
        {socials.map((social) => (
          <a key={social._id} href={social.socialLinks}>
            <i className={`fa fa-${social.socialName}`}></i>
          </a>
        ))}
      </div>
    );
  }
}

export default Socials;
