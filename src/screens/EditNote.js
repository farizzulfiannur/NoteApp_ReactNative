import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";

const EditNote = ({ setCurrentPage, currentNote, updatedNote }) => {
  const [id, setId] = useState(currentNote.id);
  const [title, setTitle] = useState(currentNote.title);
  const [desc, setDesc] = useState(currentNote.desc);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Update Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
        labelColor="#FFFFFF"
        placeholderTextColor="#CCCCCC"
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
        labelColor="#FFFFFF"
        placeholderTextColor="#CCCCCC"
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            updatedNote(id, title, desc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  spacerTop: {
    marginTop: 30,
  },
});
