import React from "react";
import MyContext from "../context/MyContext";
import { getData, getLastId } from "../reducers/PoseReducer";

export default class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "selfie",
      data: [],
      currentId: 0,
      lastId: 0
    };
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          activeCategory: this.state.activeCategory,
          data: this.state.data,
          getData: () => getData(this, this.state.currentId),
          getLastId: () => getLastId(this)
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
