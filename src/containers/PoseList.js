import React, { Component } from "react";
import { Alert, FlatList } from "react-native";
import Pose from "../components/Pose";
import MyContext from "../context/MyContext";

export default class PoseList extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <FlatList
            data={context.data}
            renderItem={({ item }) => <Pose />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = {};
