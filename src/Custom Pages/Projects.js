import React, { Component } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

class Projects extends Component {
  state = {};
  render() {
    return (
      <Layout title={"Projects"} description={"My Current and Past Projects"}>
        <Sidebar isIndex />
        <Page>
          <a href="https://github.com/Ronit-Mathur">My Github!</a>
        </Page>
      </Layout>
    );
  }
}

export default Projects;
