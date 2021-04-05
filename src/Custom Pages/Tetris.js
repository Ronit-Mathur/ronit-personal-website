import React, { Component } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import Tetris from "../TetrisGame/src/components/Tetris";
import { StyledTetrisFrame } from "./StyledTetrisFrame";

class TetrisFrame extends Component {
  state = {};
  render() {
    return (
      <Layout title={"Tetris"} description={"Tetris Placeholder"}>
        <Page>
          <Tetris />
        </Page>
      </Layout>
    );
  }
}

export default TetrisFrame;
