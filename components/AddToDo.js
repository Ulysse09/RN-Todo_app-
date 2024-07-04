import { Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const AddToDo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeText = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.addToDo}
        onChangeText={changeText}
        placeholder="New to do..."
      />
      
      <TouchableOpacity
        onPress={()=>submitHandler(text)}
        title="Add to do"
        style={styles.but}

        

      >
        <Text style={styles.text}>Add Todo</Text>
        </TouchableOpacity>
    
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  addToDo: {
    marginBottom: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 8,
    marginTop: 15,
    marginHorizontal: 30,
  },
  but:{
    backgroundColor:"coral",
    marginHorizontal:50,
    paddingVertical:10
  },
  text:{
    textAlign:"center",
    fontSize:20,
    fontStyle:"bold",
    color:"#fff",
    
  }
});
