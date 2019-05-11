import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Thumbnail } from "native-base";
import AppColor from "../asset/color/AppColor";

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  inactive = () => {
    this.setState({ active: false });
  };

  getImgSource = name => {
    switch (name) {
      case "selfie":
        return require("../asset/img/img.jpg");
      case "swag":
        return require("../asset/img/img.jpg");
      case "friends":
        return require("../asset/img/img.jpg");
      case "couple":
        return require("../asset/img/img.jpg");
      case "cool":
        return require("../asset/img/img.jpg");
    }
  };

  onCategoryPressed = () => {
    const { onCategoryPressed } = this.props;

    this.setState({ active: !this.state.active });

    onCategoryPressed();
  };

  render() {
    const { active } = this.state;
    const { name } = this.props;
    const imgSource = this.getImgSource(name);

    const thumbnailContainerStyle = active
      ? [styles.thumbnailContainer, styles.thumbnailContainerActive]
      : [styles.thumbnailContainer, styles.thumbnailContainerInActive];

    const textStyle = active
      ? [styles.text, styles.textActive]
      : [styles.text, styles.textInActive];

    return (
      <TouchableOpacity onPress={() => this.onCategoryPressed()}>
        <View style={styles.container}>
          <View style={thumbnailContainerStyle}>
            <Thumbnail source={imgSource} style={styles.thumbnail} />
          </View>
          <Text style={textStyle}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16
  },
  thumbnailContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2
  },
  thumbnailContainerActive: {
    borderColor: AppColor.accentColor
  },
  thumbnailContainerInActive: {
    borderColor: AppColor.primaryTextColor
  },
  thumbnail: {
    width: 48,
    height: 48
  },
  text: {
    textAlign: "center"
  },
  textActive: {
    color: AppColor.accentColor
  },
  textInActive: {
    color: AppColor.primaryTextColor
  }
});
