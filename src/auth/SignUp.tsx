// screens/RegisterScreen.tsx
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { signUp } from '../../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = () => {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const handleRegister = () => {
    signUp(email, password, () => {
      navigation.navigate("SignIn");
      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.backgroundimage} source={{uri: "https://firebasestorage.googleapis.com/v0/b/to-do-list-app-2559b.appspot.com/o/BG.png?alt=media&token=ebeb0270-b1d4-4e5f-a8d0-a7884a305561"}}>
      <Text style={styles.header1}>Welcome on board!</Text>
      <Text style={styles.header2}>Let's help you meet up your tasks</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Full Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Create a Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your Password"
      />
      <TouchableOpacity style={styles.SignUp} onPress={handleRegister} >
        <Text style={styles.SignUptext}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.textcontainer}>
      
      <Text style={styles.text}>Already have an account? </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
        Sign In
      </Text>
      </View>
      
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  backgroundimage: {
    flex:1,
   width: "100%"},
  header1: {
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
    marginBottom: 20
  },
  header2: {
    fontSize: 14,
    color: "#55847A",
    alignSelf: "center",
    marginBottom: 20
  },
  input: {
    height: 47,
    width: 340,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    alignSelf: "center",
    paddingHorizontal: 8,
  },
  SignUp: {
    height: 44,
    width: 220,
    backgroundColor: "#55847A",
    marginTop: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  SignUptext: {
    color: "#FFFFFF",
    fontSize: 14,
    alignItems: "center",
  },
  link: {
    fontSize: 15,
    color: "#55847A"
  },
  text: {
    fontSize: 15,
    color: "#000000"
  },
  textcontainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: "center"
  }
});

export default SignUp;
  

