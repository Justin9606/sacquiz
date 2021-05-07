import React from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <View
      style={{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: 50,
        height: 200,
      }}
    >
      <Text>LOGO</Text>
    </View>
    <RowItem
      name="Easy"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Easy",
          questions: spaceQuestions,
          color: "#36b1f0",
        })
      }
    />
    <RowItem
      name="Normal"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Normal",
          questions: westernsQuestions,
          color: "#799496",
        })
      }
    />
    <RowItem
      name="Hard"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Hard",
          questions: computerQuestions,
          color: "#49475B",
        })
      }
    />
  </ScrollView>
);
