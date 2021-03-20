import React, { Component } from "react";
import Input from "./common/input";
import "./styles/contact.css";
class Contact extends Component {
  state = {
    accounts: {
      email: "",
      name: "",
      description: "",
    },
  };
  handleChange = (e) => {
    const accounts = { ...this.state.accounts };
    accounts[e.target.name] = e.target.value;
    this.setState({ accounts });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted successfully");
  };
  render() {
    const { accounts } = this.state;
    return (
      <section className="Contact section" id="section-contact">
        <div className="container page">
          <h2>Tell your ideas _</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Enter your email"
              onChange={this.handleChange}
              value={accounts.email}
              name="email"
            />
            <Input
              placeholder="Project name, ideas ..."
              onChange={this.handleChange}
              value={accounts.name}
              name="name"
            />
            <Input
              placeholder="Project details ..."
              onChange={this.handleChange}
              value={accounts.description}
              name="description"
            />
            <button>Let's do it</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
