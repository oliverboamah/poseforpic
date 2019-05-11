import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Icon } from "native-base";
import MyContext from "../context/MyContext";
import AppColor from "../asset/color/AppColor";

export default class Pose extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require("../asset/img/img.jpg")}
              />
              <View style={styles.actions}>
                <Button transparent>
                  <Icon
                    type="FontAwesome"
                    name="bookmark-o"
                    style={{ color: AppColor.primaryTextColor }}
                  />
                  <Text>Save</Text>
                </Button>
                <Button transparent>
                  <Icon
                    type="FontAwesome"
                    name="send-o"
                    style={{ color: AppColor.primaryTextColor }}
                  />
                  <Text>Share</Text>
                </Button>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = {
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 300,
    borderBottomWidth: 1,
    borderBottomColor: AppColor.secondaryTextColor
  },
  image: {
    width: "100%",
    height: 255,
    borderRadius: 10
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
