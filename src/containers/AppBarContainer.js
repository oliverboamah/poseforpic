import React, { Component } from "react";
import { Card } from "native-base";
import TitleBar from "../components/TitleBar";
import CategoriesContainer from "./CategoriesContainer";
import AppColor from "../asset/color/AppColor";

export default class AppBarContainer extends Component {
  render() {
    return (
      <Card style={styles.header}>
        <TitleBar />
        <CategoriesContainer />
      </Card>
    );
  }
}

const styles = {
  header: {
    flexDirection: "column",
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 8,
    marginLeft: -2,
    marginRight: -2,
    marginTop: -2,
    backgroundColor: AppColor.primaryColor
  }
};
