import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontSize: 18 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
