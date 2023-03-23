import React, { Component } from "react";
import NavBar from "../components/NavBar";
export default class About extends Component {
  render() {
    return (
      <>
        <NavBar />
        <section className="hero">
          <h1>Welcome to About Page</h1>
        </section>
      </>
    );
  }
}
