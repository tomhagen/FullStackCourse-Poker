import React, { Component, Fragment } from "react";
import Controls from "./control";
import Main from './main';
import './index.css';

class Game extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Controls/>
          <Main/>
        </div>
      </Fragment>
    );
  }
}
export default Game;
