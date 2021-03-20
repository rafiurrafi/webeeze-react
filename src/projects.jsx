import React, { Component } from "react";
import projectService from "./service/projectService";
import { addLineBreak } from "./utils/formatString";
class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    const projects = [...projectService];
    this.setState({ projects });
  }
  render() {
    const { projects } = this.state;
    console.log(projects);
    return (
      <section className="Project section" id="section-projects">
        <div className="container page">
          <h2>Our projects _</h2>
          {projects.map((project) => (
            <div key={project._id} className="single-content">
              <img src={project.imgSrc} alt="" className="single-img" />
              <h3>
                {project.projectName} |
                <span className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>
              </h3>
              <p className="text">{addLineBreak(project.description)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
