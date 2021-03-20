import React, { Component } from "react";
import teamService from "./service/teamService";
import { addLineBreak } from "./utils/formatString";
class Team extends Component {
  state = {
    teams: [],
  };
  componentDidMount() {
    const teams = [...teamService];
    this.setState({ teams });
  }
  render() {
    const { teams } = this.state;
    return (
      <section className="Team" id="section-team">
        <div className="container page">
          <h2>Our team _</h2>
          {teams.map((team) => (
            <div key={team._id} className="single-content">
              <img src={team.teamMemberImg} alt="" className="single-img" />
              <h3>{team.teamMemberName}</h3>
              <p className="text">{addLineBreak(team.teamMemberDescription)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Team;
