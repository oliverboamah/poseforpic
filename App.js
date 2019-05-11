import React, { Component } from "react";
import MyProvider from "./src/providers/MyProvider";
import AppContainer from "./src/react-navigation/AppContainer";

export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <AppContainer />
      </MyProvider>
    );
  }
}


