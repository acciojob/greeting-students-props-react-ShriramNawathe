// write code for Welcome component here
import React from "react";
import "./Welcome.css";

const Welcome = (props) => {
  const { name } = props;
  return (
    <div className="welcome-container">
      <h1 className="welcome-greeting">Hey {name}!</h1>
      <h2 className="welcome-subheading">Welcome to school.</h2>
    </div>
  );
};

export default Welcome;
