import React, { Component } from "react";
import { Container, Content } from "native-base";
import MyContext from "../../context/MyContext";
import AppBarContainer from "../../containers/AppBarContainer";
import PoseList from "../../containers/PoseList";

export default class HomeScreen extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Container>
            <AppBarContainer />
            <Content>
              <PoseList />
            </Content>
          </Container>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = {};
