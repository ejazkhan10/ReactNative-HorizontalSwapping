import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
      >
        <View style={[styles.outer, styles.blue]}>
          <Text style={styles.innerText}> textInComponent </Text>
        </View>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.innerText}> textInComponent2 </Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}> textInComponent3 </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  innerText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold"
  },
  red: {
    backgroundColor: "#dd4b39"
  },
  blue: {
    backgroundColor: "#007bb6"
  },
  green: {
    backgroundColor: "#27ae60"
  }
});
