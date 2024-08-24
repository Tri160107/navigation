import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Feed = () => {
  const navigation = useNavigation<any>();

  return (
    
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Article");
        }}
      >
        <View style={styles.button}>
        <Text style={styles.text}>Go to article</Text>
        </View>
      </TouchableOpacity>
    
  );
};

export default Feed;

const styles = StyleSheet.create({
  button: {
    height: 100, 
    width: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
