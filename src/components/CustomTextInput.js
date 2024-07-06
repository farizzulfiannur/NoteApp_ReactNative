import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
  labelColor = "white",
  placeholderTextColor = "white",
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    labelStyle: {
      color: labelColor,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
      marginTop: 5,
      color: "white",
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.input}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={label}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
};

export default CustomTextInput;
