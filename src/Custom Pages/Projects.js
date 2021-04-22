import React, { Component } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import TetrisFrame from "./Tetris";

class Projects extends Component {
  state = {};
  render() {
    return (
      <Layout title={"Projects"} description={"My Current and Past Projects"}>
        <Sidebar />
        <Page>
          <p>Control with arrow keys, rotate with up arrow</p>
          <TetrisFrame />
        </Page>
      </Layout>
    );
  }
}

export default Projects;
