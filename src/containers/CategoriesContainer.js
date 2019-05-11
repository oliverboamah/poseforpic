import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Category from "../components/Category";

export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.categoriesText}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            ref={ref => (this.selfie = ref)}
            name="selfie"
            onCategoryPressed={() => {
              this.swag.inactive();
              this.friends.inactive();
              this.couple.inactive();
              this.cool.inactive();
            }}
          />
          <Category
            ref={ref => (this.swag = ref)}
            name="swag"
            onCategoryPressed={() => {
              this.selfie.inactive();
              this.friends.inactive();
              this.couple.inactive();
              this.cool.inactive();
            }}
          />
          <Category
            ref={ref => (this.friends = ref)}
            name="friends"
            onCategoryPressed={() => {
              this.swag.inactive();
              this.selfie.inactive();
              this.couple.inactive();
              this.cool.inactive();
            }}
          />
          <Category
            ref={ref => (this.couple = ref)}
            name="couple"
            onCategoryPressed={() => {
              this.swag.inactive();
              this.friends.inactive();
              this.selfie.inactive();
              this.cool.inactive();
            }}
          />
          <Category
            ref={ref => (this.cool = ref)}
            name="cool"
            onCategoryPressed={() => {
              this.swag.inactive();
              this.friends.inactive();
              this.couple.inactive();
              this.selfie.inactive();
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  categoriesText: {
    marginBottom: 4
  }
});
