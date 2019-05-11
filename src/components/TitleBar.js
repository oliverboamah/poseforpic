import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button, Icon } from "native-base";
import AppColor from "../asset/color/AppColor";

export default class TitleBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      male: true
    };
  }

  render() {
    const { male } = this.state;
    const icon_gender = male ? "male" : "female";

    return (
      <View style={styles.container}>
        <Icon type="FontAwesome" name="bookmark-o" />
        <Text style={styles.text}>PoseForPic</Text>
        <TouchableOpacity onPress={() => this.setState({ male: !male })}>
          <Icon type="FontAwesome" name={icon_gender} style={{color: AppColor.primaryTextColor}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  text: {
    color: AppColor.primaryTextColor
  }
});
