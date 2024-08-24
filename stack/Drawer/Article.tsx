import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Article = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity onPress ={()=>{
      navigation.goBack()
    }}>
      <View style={styles.button}>
        <Text style={styles.text}>Go back to feed</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Article

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  text: {
    color: "white"
  }
})