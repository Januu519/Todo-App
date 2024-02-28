import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
import { useState } from "react";

const Task = (props) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const showDialog = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleUpdate = () => {
    props.list.map((item, index) => {
      if (item === props.task) {
        props.list[index] = text;
        props.call([...props.list]);
      }
    });
    setVisible(false);
  };

  const handleDelete=()=>{
    props.list.map((item, index) => {
      if (item === props.task) {
        props.list.splice(index, 1);
        props.call([...props.list]);
      }
    });
  }

  return (
    <LinearGradient style={styles.container} colors={["#758bfd", "#ffd6ff"]}>
      <Text style={styles.text}>{props.task}</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Feather name="edit" size={24} color="green" onPress={showDialog} />
        <MaterialIcons name="delete-outline" size={24} color="red" onPress={handleDelete} />
      </View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Update TODO</Dialog.Title>
        <TextInput style={styles.input} placeholder="" value={text} onChangeText={(e)=>{setText(e)}}></TextInput>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="UPDATE" onPress={handleUpdate} />
      </Dialog.Container>
    </LinearGradient>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#00b4d8",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "#00b4d8",
    fontSize: 20,
  },
});
