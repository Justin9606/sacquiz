import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={{
      top: Dimensions.get("window").height / 5,
    }}
  >
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
