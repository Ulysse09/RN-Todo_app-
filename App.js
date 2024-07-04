import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Todo from "./components/Todo";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Sports", key: "1" },
    { text: "Develop", key: "2" },
    { text: "Make Bank", key: "3" },
  ]);

  const submitHandler = (text) => {
    if(text.length >1) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    }
    else  {
      Alert.alert("Make bread Loser ","Why you broke broddie",[{
        text:"Go ahead homeboy "
      }])
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <AddToDo submitHandler={submitHandler} />
        <Todo todo={todos} setTodos={setTodos} />
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    justifyContent: "flex-start",
  },
  list: {
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "italic",
    borderStyle: "dashed",

    borderRadius: 10,
  },
  item: {
    borderStyle: "dashed",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 40,
    paddingHorizontal: 35,
  },
});
