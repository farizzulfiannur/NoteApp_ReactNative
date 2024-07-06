import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
  borderRadius = 10,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
      borderRadius,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
