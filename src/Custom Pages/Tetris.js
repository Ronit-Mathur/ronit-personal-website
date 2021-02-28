import React, { Component } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

class Tetris extends Component {
  state = {};
  render() {
    return (
      <Layout title={"Tetris"} description={"Tetris Placeholder"}>
        <Sidebar isIndex />
        <Page>
          <p>Placeholder for Tetris Project - Coming soon!</p>
        </Page>
      </Layout>
    );
  }
}

export default Tetris;
