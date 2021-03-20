import React from "react";
import "./styles/sidebar.css";
const Sidebar = (props) => {
  return (
    <section className="Sidebar">
      <div className="Sidebar-bg"></div>
      <div className="Sidebar-content">
        <h1>
          Hi, <br />
          We are <br />
          <span>Webeeze</span>
        </h1>
        <p>
          With a <br />
          Mission to change <br />
          the world through coding ...
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
