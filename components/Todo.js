import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import { useState } from "react";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Todo = ({ todo, setTodos }) => {
  const pressHandler = (key) => {
    return setTodos((prevState) =>
      prevState.filter((todo) => todo.key !== key)
    );
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => pressHandler(item.key)}
      >
        <Text style={styles.list}>{item.text}</Text>

        <Feather name="delete" size={24} color="red" />
      </TouchableOpacity>
    );
  };

  return <FlatList data={todo} renderItem={renderItem} />;
};

export default Todo;

const styles = StyleSheet.create({
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});
